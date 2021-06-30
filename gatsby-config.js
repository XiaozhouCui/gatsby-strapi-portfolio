/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Joe's Portfolio`,
    description: `Awesome portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Joe's Portfolio`,
    url: `https://joe-portfolio-gatsby.netlify.app`,
    twitterUsername: `@Joe_Cui`,
    image: `/mainImg.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // // ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        collectionTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
  ],
}
