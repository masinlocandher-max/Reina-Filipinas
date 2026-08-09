import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalFor, normalizePath, notFoundMeta, pageMeta, schemaFor, SITE_URL } from '../seo-data.js'

function setMeta(selector, attribute, value) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/)
    if (match) element.setAttribute(match[1], match[2])
    document.head.append(element)
  }
  element.setAttribute(attribute, value)
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    if (hreflang) element.hreflang = hreflang
    document.head.append(element)
  }
  element.href = href
}

export default function Metadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = normalizePath(pathname)
    const metadata = pageMeta[path] || notFoundMeta
    const canonical = canonicalFor(path)
    const image = `${SITE_URL}${metadata.image}`
    const robots = metadata.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    document.documentElement.lang = 'en-PH'
    document.title = metadata.title
    setMeta('meta[name="description"]', 'content', metadata.description)
    setMeta('meta[name="robots"]', 'content', robots)
    setMeta('meta[name="googlebot"]', 'content', robots)
    setMeta('meta[property="og:title"]', 'content', metadata.title)
    setMeta('meta[property="og:description"]', 'content', metadata.description)
    setMeta('meta[property="og:type"]', 'content', metadata.type)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[property="og:image:secure_url"]', 'content', image)
    setMeta('meta[property="og:image:alt"]', 'content', metadata.imageAlt)
    setMeta('meta[property="og:image:width"]', 'content', String(metadata.imageWidth))
    setMeta('meta[property="og:image:height"]', 'content', String(metadata.imageHeight))
    setMeta('meta[name="twitter:title"]', 'content', metadata.title)
    setMeta('meta[name="twitter:description"]', 'content', metadata.description)
    setMeta('meta[name="twitter:image"]', 'content', image)
    setMeta('meta[name="twitter:image:alt"]', 'content', metadata.imageAlt)
    setLink('canonical', canonical)
    setLink('alternate', canonical, 'en-PH')
    setLink('alternate', canonical, 'x-default')

    let structuredData = document.querySelector('#route-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'route-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.append(structuredData)
    }
    structuredData.textContent = JSON.stringify(schemaFor(path, metadata))
  }, [pathname])

  return null
}
