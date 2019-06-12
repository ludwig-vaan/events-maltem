let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Évènements de Maltem Consulting Group `,
    enterprise: `Maltem Consulting Group`,
    description: `Venez découvrir dans ce groupe les différents évènements organisés par Maltem Consulting et les différentes entités qui composent le groupe. Au programme, des discussions sur les tendances innovation du moment (blockchain, IA, Big datas, etc), des meetups spécifiques sur des technos de pointe mais également un think tank de réflexions sur l'impact de l'innovation sur nos sociétés. Comment la tech peut être un levier pour répondre aux enjeux sociétaux ?`,
    author: `Maltem-Consulting`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-eventbrite`,
      options: {
        organizationId: process.env.EVENTBRITE_ORGANIZATION_ID,
        accessToken: process.env.EVENTBRITE_ACCESS_TOKEN,
        // OPTIONAL: Defaults are Events and Venues
        entities: ["events"],
      },
    },
  ],
}
