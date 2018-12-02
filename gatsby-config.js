require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: 'Boise\'s Brigade, Idaho\'s local Code for America chapter',
    description: 'A group of civic minded hacktivists, hobbyists, and community engaged individuals',
    siteUrl: 'boisebrigade.org',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ek3asxu2ztn0`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
