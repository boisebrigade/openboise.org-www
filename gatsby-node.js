const path = require('path')

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
            console.log(slug)
            createPage({
              path: `${prefix}/${slug}`,
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
