import React from 'react'
import { Link, graphql } from 'gatsby'

import '../../styles/styles.css'

import Head from '../components/Head'
import Wrap from '../components/Wrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class extends React.Component {
  render() {
    const { data } = this.props

    const {
      mainMenu: {
        links: mainMenu
      },
      project: {
        metaDescription: metaDescription,
        metaTitle: metaTitle,
        title: title,
      }
    } = data

    return (
      <React.Fragment>
        <Head title={metaTitle} description={metaDescription} />
        <Wrap>
          <Header mainMenu={mainMenu} />
          <Footer />
        </Wrap>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    mainMenu: contentfulMenu(menuName: {eq: "Main Menu"}) {
      links {
        text
        link
      }
    }
    project: contentfulProject(slug: {eq: $slug}) {
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
