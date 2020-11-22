// This file is empty, 
// but some people were reporting that it would not start unless they had an empty file. 
// So here it is! You can delete the comment. 
// Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
// logs immediately to check if it works:
// console.log(process.env.SANITY_TOKEN)

export default {
    siteMetadata: {
        title: 'SpringAnimation',
        siteUrl: 'http://commi.zapto.org/gatsby/ts/spring',
        description: 'Animation with react-spring',
        twitter: '@z_zet_bit',
        twitterBrowser: 'Yandex',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'jvloe68g',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        },
    ]
}
