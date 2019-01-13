const path = require('path')
const glob = require(`glob`)

const remoteNodes = (createPage, graphql, entity, template, prefix = '/') =>
    new Promise((resolve, reject) => {
      resolve(
        graphql(
          `query Create${entity} { 
            ${entity} {
              edges {
                node {
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
    createPage({
      path: '/blog-posts',
      component: path.resolve(`./src/pages/blog-posts.js`),
    }),
    createPage({
      path: '/projects',
      component: path.resolve(`./src/pages/projects.js`),
    })

  ])
}
