import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
