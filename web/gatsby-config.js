// Load variables from `.env` as soon as possible
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-5C64MPR',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' }
            }
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd
            }
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `passiv-theme`,
                short_name: `passiv`,
                start_url: `/`,
                icon: `src/images/logo-no-name.png`
            }
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://passiv.com',
                sitemap: 'https://passiv.com/sitemap.xml',
                policy: [{
                    userAgent: '*',
                    allow: '/',
                    disallow: [
                        '/admin',
                        '/app',
                        '/api',
                    ],
                }],
            }
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: '418142142497432',
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: '418142142497432',
            },
        },
    ],
    siteMetadata: {
        siteUrl: `https://passiv.com`,
    },
}
