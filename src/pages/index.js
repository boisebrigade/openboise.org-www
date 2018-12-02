import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
          link={[{
            rel: "stylesheet", type: "text/css", href: "tachyons.min.css"
          }]}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={title}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={`blog/${node.slug}`}>
                  {title}
                </Link>
              </h3>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
