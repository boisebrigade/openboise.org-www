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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-postcss`,
  ],
}
