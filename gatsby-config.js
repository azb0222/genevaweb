module.exports = {
  siteMetadata: {
    title: `geneva_web`,
    description: `Geneva, the data personalization startup founded by Vidushi Meel and Asritha Bodepudi`,
    author: `@carnegiepilled on twitter`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      },
    },
  ],
};
