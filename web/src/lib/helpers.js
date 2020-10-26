import {format, isFuture} from 'date-fns'
import qs from 'qs';


export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(publishedAt)
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj (source = {asset: {}}) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText (blocks) {
  if (!blocks) {
    return ''
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export function generateTrackingCode () {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   var codeLength       = 10;
   for ( var i = 0; i < codeLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export function saveTrackingCode () {
  if (typeof window !== 'undefined') {
    const existingCode = getTrackingCode();
    if (existingCode === null || existingCode === '') {
      localStorage.setItem('tracking-ref', generateTrackingCode());
    }
  }
}

export function getTrackingCode () {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('tracking-ref');
  }
}

export function saveReferralCode () {
  if (typeof window !== 'undefined') {
    const query_params = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    if (query_params.ref !== undefined) {
      localStorage.setItem('landing-ref', query_params.ref);
    }
  }
}

export function getReferralCode () {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('landing-ref');
  }
}
