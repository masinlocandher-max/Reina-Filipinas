export const SITE_URL = 'https://reinafilipinas.com'

export const pageMeta = {
  '/': {
    title: 'Reina Filipinas 2026 | Official Website',
    description: 'Official website of Reina Filipinas, the Philippine national pageant platform for Miss Grand International and MGI All Stars. Meet the 2026 titleholders, candidates and leadership.',
    image: '/media/reina-hero-poster-hd.webp',
    imageAlt: 'Reina Filipinas 2026 Grand Coronation Night',
    imageWidth: 1280,
    imageHeight: 720,
    type: 'website',
    schemaType: 'WebPage',
    name: 'Reina Filipinas 2026',
  },
  '/about': {
    title: 'About Reina Filipinas | Leadership and Organization',
    description: 'Meet Reina Filipinas President and CEO Jojo Bragais, National Director Emma Mary Tiglao and Executive Partner Nawat Itsaragrisil, and learn about the organization.',
    image: '/images/jojo-bragais.webp',
    imageAlt: 'Reina Filipinas President and CEO Jojo Bragais',
    imageWidth: 1400,
    imageHeight: 1400,
    type: 'website',
    schemaType: 'AboutPage',
    name: 'About Reina Filipinas',
  },
  '/the-pageant': {
    title: 'Reina Filipinas 2026 Results, Candidates and Coronation',
    description: 'Complete Reina Filipinas 2026 coverage: 21 candidates, inaugural winners Angelica Lopez, Alexie Brooks and Anne Patricia Diaz, royal court, hosts, judges and competition results.',
    image: '/images/titleholders-2026.webp',
    imageAlt: 'Reina Filipinas 2026 titleholders Angelica Lopez, Alexie Brooks and Anne Patricia Diaz',
    imageWidth: 1120,
    imageHeight: 1400,
    type: 'article',
    schemaType: 'CollectionPage',
    name: 'Reina Filipinas 2026 Pageant Results and Candidates',
  },
  '/mgi-all-stars': {
    title: 'Alexie Brooks and Anne Patricia Diaz | MGI All Stars 2026',
    description: 'Meet Reina Filipinas MGI All Stars 2026 titleholders Alexie Brooks of Iloilo City and Anne Patricia Diaz of Manila as they represent the Philippines in Thailand.',
    image: '/images/alexie-brooks-anne-diaz.webp',
    imageAlt: 'MGI All Stars Philippines titleholders Alexie Brooks and Anne Patricia Diaz',
    imageWidth: 1120,
    imageHeight: 1400,
    type: 'article',
    schemaType: 'CollectionPage',
    name: 'Reina Filipinas MGI All Stars 2026',
  },
  '/miss-grand-philippines': {
    title: 'Angelica Lopez | Miss Grand Philippines 2026',
    description: 'Meet Angelica Lopez of Palawan, Reina Filipinas Grand International 2026, and follow her Philippine campaign for Miss Grand International in India.',
    image: '/images/angelica-lopez.webp',
    imageAlt: 'Angelica Lopez, Reina Filipinas Grand International 2026',
    imageWidth: 1119,
    imageHeight: 1400,
    type: 'profile',
    schemaType: 'ProfilePage',
    name: 'Angelica Lopez, Miss Grand Philippines 2026',
  },
  '/contact': {
    title: 'Contact Reina Filipinas | Press and Partnerships',
    description: 'Contact Reina Filipinas through its official channels for press interviews, brand partnerships, candidate information and general inquiries.',
    image: '/images/reina-filipinas-logo.webp',
    imageAlt: 'Reina Filipinas official logo',
    imageWidth: 1400,
    imageHeight: 1400,
    type: 'website',
    schemaType: 'ContactPage',
    name: 'Contact Reina Filipinas',
  },
}

export const notFoundMeta = {
  title: 'Page Not Found | Reina Filipinas',
  description: 'The requested page could not be found. Return to the official Reina Filipinas website.',
  image: '/images/reina-filipinas-logo.webp',
  imageAlt: 'Reina Filipinas official logo',
  imageWidth: 1400,
  imageHeight: 1400,
  type: 'website',
  schemaType: 'WebPage',
  name: 'Page Not Found',
  noindex: true,
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export function canonicalFor(pathname) {
  const path = normalizePath(pathname)
  return `${SITE_URL}${path === '/' ? '/' : path}`
}

export function schemaFor(pathname, metadata = pageMeta[normalizePath(pathname)] || notFoundMeta) {
  const path = normalizePath(pathname)
  const canonical = canonicalFor(path)
  const image = `${SITE_URL}${metadata.image}`
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Reina Filipinas',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/reina-filipinas-logo.webp`,
        width: 1400,
        height: 1400,
      },
      description: 'The Philippine national pageant platform for Miss Grand International and MGI All Stars.',
      sameAs: [
        'https://www.facebook.com/reinafilipinas',
        'https://www.instagram.com/reina_filipinas/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Reina Filipinas',
      inLanguage: 'en-PH',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': metadata.schemaType,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: metadata.name,
      headline: metadata.name,
      description: metadata.description,
      inLanguage: 'en-PH',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: image,
        width: metadata.imageWidth,
        height: metadata.imageHeight,
        caption: metadata.imageAlt,
      },
    },
  ]

  if (path !== '/' && !metadata.noindex) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: metadata.name, item: canonical },
      ],
    })
  }

  if (path === '/about') {
    graph.push({
      '@type': 'ItemList',
      name: 'Reina Filipinas Leadership',
      itemListElement: [
        { '@type': 'Person', position: 1, name: 'Jojo Bragais', jobTitle: 'President and CEO', image: `${SITE_URL}/images/jojo-bragais.webp` },
        { '@type': 'Person', position: 2, name: 'Emma Mary Tiglao', jobTitle: 'National Director', image: `${SITE_URL}/images/emma-mary-tiglao.webp` },
        { '@type': 'Person', position: 3, name: 'Nawat Itsaragrisil', jobTitle: 'Executive Partner', image: `${SITE_URL}/images/nawat-itsaragrisil.webp` },
      ],
    })
  }

  if (path === '/miss-grand-philippines') {
    graph.push({
      '@type': 'Person',
      '@id': `${canonical}#angelica-lopez`,
      name: 'Angelica Lopez',
      image: `${SITE_URL}/images/angelica-lopez.webp`,
      description: 'Reina Filipinas Grand International 2026 from Palawan.',
      award: 'Reina Filipinas Grand International 2026',
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
