const sourceWidths = {
  '/images/alexie-brooks-anne-diaz.webp': 1120,
  '/images/angelica-lopez.webp': 1119,
  '/images/cleopatra-barrera.webp': 1120,
  '/images/emma-mary-tiglao.webp': 1200,
  '/images/hosts-sean-kyle-ortega-joy-barcoma.webp': 1347,
  '/images/isabella-ortega.webp': 1120,
  '/images/jojo-bragais.webp': 1200,
  '/images/luisa-benavides.webp': 1120,
  '/images/nawat-itsaragrisil.webp': 1085,
  '/images/reina-filipinas-logo.webp': 1400,
  '/images/titleholders-2026.webp': 1120,
  '/images/zeah-nestle-pala.webp': 1120,
}

export function responsiveImage(src, sizes = '100vw') {
  if (!src.endsWith('.webp')) return { src, sizes }

  const sourceWidth = sourceWidths[src] || 1120

  return {
    src,
    srcSet: `${src.replace(/\.webp$/, '-640.webp')} 640w, ${src} ${sourceWidth}w`,
    sizes,
  }
}
