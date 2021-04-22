import IPFS from "ipfs"
import React from "react"

const initIPFSInstance = async () => {
  return await IPFS.create({ repo: "./chat" })
}
initIPFSInstance();
function markdown() {
  return <div>123</div>
}

export default markdown
