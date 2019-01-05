const path = require('path')
const glob = require(`glob`)

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCssPlugin = require(`purgecss-webpack-plugin`)

const PATHS = {
  src: path.join(__dirname, `src`)
}

const purgeCssConfig = {
  paths: glob.sync(`${PATHS.src}/**/*.js`, { nodir: true }),
  extractors: [
    {
      // Custom extractor to allow special characters (like ":") in class names
      // See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      extensions: [`js`]
    }
  ],
}

const remoteNodes = (createPage, graphql, entity, template, prefix = '/') =>
    new Promise((resolve, reject) => {
      resolve(
        graphql(
          `query Create${entity} { 
            ${entity} {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
        ).then(result => {
          if (result.errors) {
            console.error(result.errors)
            reject(result.errors)
          }


          const posts = result.data[entity].edges
          posts.forEach((post, index) => {
            const slug = post.node.slug.replace(/^\/+/g, '')
            let pathName = `${prefix}/${slug}`

            if (slug === '') {
              pathName = '/'
            }

            createPage({
              path: pathName,
              component: path.resolve(`./src/templates/${template}.js`),
              context: {
                slug: post.node.slug
              },
            })
          })
        })
      )
    })

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return Promise.all([
    remoteNodes(createPage, graphql, 'allContentfulBlogPost', 'blog-post', '/blog'),
    remoteNodes(createPage, graphql, 'allContentfulProject', 'project', '/project'),
    remoteNodes(createPage, graphql, 'allContentfulStandardPage', 'standard-page'),
  ])
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage.includes(`develop`)) return

  // Add PurgeCSS in production
  // See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
  if (stage.includes(`build`)) {
    actions.setWebpackConfig({
      plugins: [new PurgeCssPlugin(purgeCssConfig)]
    })
  }
}
