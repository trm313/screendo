import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Layout/seo"

export default function Template({
  data, // this prop will be injected by the graphQL query below
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div id="Polkadot--Grey" className="blog-post-container">
        <div className="blog-post max-w-3xl w-full px-4 mx-auto my-12">
          <h1 className="text-4xl">{frontmatter.title}</h1>
          <h6>Last updated: {frontmatter.date}</h6>

          <div
            className="markdown blog-post-content mt-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
