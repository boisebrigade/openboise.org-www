import React from 'react'
import { graphql } from 'gatsby'

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
    } = data

    return (
      <React.Fragment>
        <Head title="Projects" />
        <Wrap>
          <Header mainMenu={mainMenu} />
          <Footer />
        </Wrap>
      </React.Fragment>
    )
  }
}


export const pageQuery = graphql`
  query ProjectsPage {
    mainMenu: contentfulMenu(menuName: {eq: "Main Menu"}) {
      links {
        text
        link
      }
    }
  }
`
