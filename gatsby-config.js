module.exports = {
  siteMetadata: {
    title: `Tim Sabsch - Personal Website`,
    description: `Machine Learning, Data Science, Data Engineering and all other things data.`,
    author: `@tsabsch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Website of Tim Sabsch`,
        short_name: `Tim Sabsch`,
        start_url: `/`,
        background_color: `#0f0a0a`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
