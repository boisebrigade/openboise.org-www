import React from 'react'
import {graphql } from 'gatsby'

import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Wrap from '../components/Wrap'

import Container from '../components/Container'
import Text from '../components/sections/Text'
import MediaAndText from '../components/sections/MediaAndText'
import View from '../components/sections/View'

import '../../styles/styles.css'

const Section = props => {
  switch (props.__typename) {
    case "ContentfulSimpleText":
      return <Text classes={['sm:px-4', 'md:px-0']} content={props.body} />;
    case "ContentfulMediaAndText":
      return <MediaAndText {...props} />;
    case "ContentfulView":
      return <View view={props.view} />;
    default:
      return null
  }
}

export default class extends React.Component {
  render() {
    const { data } = this.props

    const {
      mainMenu: {
        links: mainMenu
      },
      standardPage: {
        metaDescription: metaDescription,
        metaTitle: metaTitle,
        content: content
      },
    } = data

    return <React.Fragment>
      <Head title={metaTitle} description={metaDescription} />
      <Wrap>
        <Header mainMenu={mainMenu} />

        {content.map(({ title, showTitle, spacing, sections }, i) => {
          const additionalClasses =
            i === 0 ? [] :
              (i-1) % 2 ? ['grade-rev']
                : ['grade'];

          if (spacing.includes("Top") && spacing.includes("Bottom")) {
            additionalClasses.push("md:py-6")
          } else if (spacing.includes("Top")) {
            additionalClasses.push("md:pt-6")
          } else if (spacing.includes("Bottom")) {
            additionalClasses.push("md:pb-6")
          }

          if (spacing.includes("Left") && spacing.includes("Right")) {
            additionalClasses.push("md:px-3")
          } else if (spacing.includes("Top")) {
            additionalClasses.push("md:pl-3")
          } else if (spacing.includes("Bottom")) {
            additionalClasses.push("md:pr-3")
          }

          return <section key={i} className={`w-full h-full center bg-grey-lightest ${additionalClasses.join(" ")}`}>
            <Container>
              {showTitle ? <h3 className="sm:pl-8 md:pl-0 sm:py-8 text-4xl block md:py-4">{title}</h3> : null}
              {Array.from(sections).map((sectionContent, j) => <Section key={j} {...sectionContent}/>)}
            </Container>
          </section>
        })}

        <Footer />
      </Wrap>
    </React.Fragment>
  }
}

export const pageQuery = graphql`
  query StandardPageBySlug($slug: String!) {
    mainMenu: contentfulMenu(menuName: {eq: "Main Menu"}) {
      links {
        text
        link
      }
    }
    standardPage: contentfulStandardPage(slug: {eq: $slug}) {
      title
      metaTitle
      metaDescription
      content {
        title
        showTitle
        spacing
        sections {
          ... on ContentfulMediaAndText {
            text: body {
              childContentfulRichText {
                internal {
                  content
                }
              }
            }
            media: image {
              title
              description
              file {
                url
              }
            }
            display
          }
          ... on ContentfulSimpleText {
            body: text {
              childContentfulRichText {
                internal {
                  content
                }
              }
            }
          }
          ... on ContentfulView {
            view {
              ... on ContentfulBlogPost {
                title
                slug
                teaser {
                  childContentfulRichText {
                    internal {
                      content
                    }
                  }
                }
              }
              ... on ContentfulProject {
                title
                slug
                teaser {
                  childContentfulRichText {
                    internal {
                      content
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

`
