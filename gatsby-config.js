require("dotenv").config()



module.exports = {
  siteMetadata: {
    title: "Open Boise local Code for America chapter",
    description: 'A group of civic minded hacktivists, hobbyists, and community engaged individuals',
    siteUrl: 'openboise.org',
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
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-postcss`,
  ],
}
