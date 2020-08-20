import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdLabel from 'react-icons/lib/md/label'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'tutorial', 'siteSettings', 'dataFeed', 'modelPortfolio', 'postMoneyGeek'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blogs')
        .child(
          S.list()
            .title('Blogs')
            .items([
              S.listItem()
                .title('The Index')
                .schemaType('post')
                .child(S.documentTypeList('post').title('The Index Posts')),
              S.listItem()
                .title('MoneyGeek')
                .schemaType('post')
                .child(S.documentTypeList('postMoneyGeek').title('Money Geek Posts')),
              S.listItem()
                .title('Authors')
                .icon(MdPerson)
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('Categories')
                .icon(MdLabel)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
              ])  
          ),
      S.listItem()
        .title('Tutorials')
        .schemaType('post')
        .child(S.documentTypeList('tutorial').title('Tutorials')),
      S.listItem()
        .title('Data feeds')
        .schemaType('post')
        .child(S.documentTypeList('dataFeed').title('Data Feed')),
      S.listItem()
        .title('Model portfolios')
        .schemaType('post')
        .child(S.documentTypeList('modelPortfolio').title('Model portfolios')),
      S.listItem()
        .title('Landing Pages')
        .schemaType('post')
        .child(S.documentTypeList('landing').title('Landing Pages')),
      
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
    ])
