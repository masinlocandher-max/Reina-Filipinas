import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { canonicalFor, pageMeta, schemaFor, SITE_URL } from '../src/seo-data.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist')
const template = await readFile(resolve(root, 'index.html'), 'utf8')

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function renderRoute(path, metadata) {
  const canonical = canonicalFor(path)
  const image = `${SITE_URL}${metadata.image}`
  let html = template
  html = html.replace(/<title>.*?<\/title>/i, `<title>${metadata.title}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.description)}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.title)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.description)}$2`)
  html = html.replace(/(<meta property="og:type" content=")[^"]*(" \/>)/i, `$1${metadata.type}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(" \/>)/i, `$1${canonical}$2`)
  html = html.replace(/(<meta property="og:image" content=")[^"]*(" \/>)/i, `$1${image}$2`)
  html = html.replace(/(<meta property="og:image:secure_url" content=")[^"]*(" \/>)/i, `$1${image}$2`)
  html = html.replace(/(<meta property="og:image:alt" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.imageAlt)}$2`)
  html = html.replace(/(<meta property="og:image:width" content=")[^"]*(" \/>)/i, `$1${metadata.imageWidth}$2`)
  html = html.replace(/(<meta property="og:image:height" content=")[^"]*(" \/>)/i, `$1${metadata.imageHeight}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.title)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.description)}$2`)
  html = html.replace(/(<meta name="twitter:image" content=")[^"]*(" \/>)/i, `$1${image}$2`)
  html = html.replace(/(<meta name="twitter:image:alt" content=")[^"]*(" \/>)/i, `$1${escapeAttribute(metadata.imageAlt)}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(" \/>)/i, `$1${canonical}$2`)
  html = html.replace(/(<link rel="alternate" hreflang="en-PH" href=")[^"]*(" \/>)/i, `$1${canonical}$2`)
  html = html.replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*(" \/>)/i, `$1${canonical}$2`)
  html = html.replace(/(<script id="route-structured-data" type="application\/ld\+json">)[\s\S]*?(<\/script>)/i, `$1${JSON.stringify(schemaFor(path, metadata))}$2`)
  return html
}

for (const [path, metadata] of Object.entries(pageMeta)) {
  const output = path === '/' ? resolve(root, 'index.html') : resolve(root, path.slice(1), 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, renderRoute(path, metadata))
}

await writeFile(resolve(root, '404.html'), template.replace(/<meta name="robots" content="[^"]+"/i, '<meta name="robots" content="noindex, nofollow"'))
