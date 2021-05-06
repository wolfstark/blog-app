import IPFS from "ipfs"
import OrbitDB from "orbit-db"
import Multiaddr from "multiaddr"

// For js-ipfs >= 0.38

// Create IPFS instance
const initIPFSInstance = async () => {
  const ipfs = await IPFS.create({
    repo: "./chat",
    EXPERIMENTAL: {
      ipnsPubsub: true,
    },
  })
//   await ipfs.bootstrap.clear()
//   console.log(
//     "🚀 ~ file: database.ts ~ line 16 ~ db ~ ipfs",
//     await ipfs.bootstrap.list()
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ"
//     )
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/ip4/104.131.131.82/udp/4001/quic/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ"
//     )
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN"
//     )
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa"
//     )
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb"
//     )
//   )
//   await ipfs.bootstrap.add(
//     new Multiaddr(
//       "/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt"
//     )
//   )
  //   await ipfs.bootstrap.add(validIp4)
  return ipfs
}
const db = initIPFSInstance().then(async ipfs => {
  const orbitdb = await OrbitDB.createInstance(ipfs)
  const id = await ipfs.id()
  console.log(id)
  const options = {
    // Give write access to everyone
    accessController: {
      write: ["*"],
    },
  }

  // Create / Open a database
  const db = await orbitdb.docs(
    "my.markdown.files",
    options
  )
  await db.load()
  console.log(db.address.toString())
  //   Listen for updates from peers
  db.events.on("replicated", address => {
    console.log(db.iterator({ limit: -1 }).collect())
  })

  //   Add an entry
  //   const hash = await db.add("world")
  //   console.log(hash)

  //   Query
  //   const result = db.iterator({ limit: -1 }).collect()
  //   console.log(JSON.stringify(result, null, 2))
  return db
})

export default async function getDatabase() {
  return await db
}
