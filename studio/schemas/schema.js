// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import postMoneyGeek from './documents/postMoneyGeek'
import dataFeed from './documents/dataFeed'
import modelPortfolio from './documents/modelPortfolio'
import tutorial from './documents/tutorial'
import featurePage from './documents/featurePage'
import landing from './documents/landing'
import siteSettings from './documents/siteSettings'
import vimeo from './documents/vimeo'
import youtube from './documents/youtube'
import testimonial from './documents/testimonial'
import feature from './documents/feature'
import howToInvest from './documents/howToInvest'
import howToBuy from './documents/howToBuy'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'blog',
    // Then proceed to concatenate our our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        siteSettings,
        post,
        postMoneyGeek,
        category,
        tutorial,
        featurePage,
        landing,
        author,
        mainImage,
        authorReference,
        bodyPortableText,
        bioPortableText,
        dataFeed,
        modelPortfolio,
        vimeo,
        youtube,
        feature,
        testimonial,
        excerptPortableText,
        howToInvest,
        howToBuy

        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
    ])
})
