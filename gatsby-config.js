/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://synthdigital.com/`,
    title: `SynthDigital`,
    description: `We’re a UI/UX strategy and design agency in Dallas, Tx. We create kickass digital products accross all platforms.`,
    author: `@ghughes139`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/group-12.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://synthdigital.com/",
        sitemap: "https://synthdigital.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
