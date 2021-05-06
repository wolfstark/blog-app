import IPFS from "ipfs"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getDatabase from "../common/database"

// const initIPFSInstance = async () => {
//   return await IPFS.create({ repo: "./chat" })
// }
// initIPFSInstance()

const Markdown = ({ data, location }) => {
  // const db = useMemo(() => getDatabase(), [])
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [value, setValue] = useState("")
  const db = useRef(null)
  useEffect(() => {
    getDatabase().then(_db => {
      db.current = _db
      const [data] = _db.get("1")
      if (data) setValue(data.value)
    })
  }, [])
  const onChange = async e => {
    console.log(
      "🚀 ~ file: markdown.js ~ line 20 ~ Markdown ~ e",
      e.target.value
    )
    db.current.put({ _id: "1", value: e.target.value })
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <SEO title="All posts" /> */}
      {/* <Bio /> */}
      <textarea
        className="bg-gray-100"
        onChange={onChange}
        defaultValue={value}
      ></textarea>
    </Layout>
  )
}

export default Markdown

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`
