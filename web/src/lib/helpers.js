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

export function saveReferralCode () {
  const query_params = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  if (query_params.ref !== undefined) {
    localStorage.setItem('landing-ref', query_params.ref);
  }
}

export function getReferralCode () {
  return localStorage.getItem('landing-ref');
}

export function getLoginPath () {
  const referralCode = getReferralCode();

  let loginPath = '/app/login/';

  if (referralCode !== null) {
    loginPath += `?ref=${referralCode}`;
  }

  return loginPath;
}

export function getRegisterPath () {
  const referralCode = getReferralCode();

  let registerPath = '/app/register/';

  if (referralCode !== null) {
    registerPath += `?ref=${referralCode}`;
  }

  return registerPath;
}
