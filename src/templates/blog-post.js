import React from 'react'
import { Link, graphql } from 'gatsby'

import Head from '../components/Head'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'

import Wrap from '../components/Wrap'

import Text from '../components/sections/Text'

export default class extends React.Component {
  render() {
    const { data } = this.props

    const {
      mainMenu: {
        links: mainMenu
      },
      blogPost: {
        metaDescription: metaDescription,
        metaTitle: metaTitle,
        title: title,
        body: body
      },
    } = data

    return <React.Fragment>
      <Head title={metaTitle} description={metaDescription} />
      <Wrap>
        <Header mainMenu={mainMenu} />

        <Container blog={true}>
          <article>
            <h1 className="text-5xl font-extrabold md:whitespace-pre py-4">{title}</h1>

            <Text content={body} />


          </article>
        </Container>

        <Footer />
      </Wrap>
    </React.Fragment>
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mainMenu: contentfulMenu(menuName: {eq: "Main Menu"}) {
      links {
        text
        link
      }
    }
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      title
      metaTitle
      metaDescription
      body {
        childContentfulRichText {
          internal {
            content
          }
        }
      }
    }
  }
`
