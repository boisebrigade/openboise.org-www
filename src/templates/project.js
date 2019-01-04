import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export default class extends React.Component {
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

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      title
      metaTitle
      metaDescription
      link
      body {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
