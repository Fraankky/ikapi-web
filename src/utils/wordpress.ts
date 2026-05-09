import type { WPTerm } from '../types/wordpress'

export function sanitizeWordPressHtml(html = '') {
  if (typeof window === 'undefined' || !html.trim()) {
    return html
  }

  const parser = new DOMParser()
  const documentFragment = parser.parseFromString(html, 'text/html')

  documentFragment
    .querySelectorAll('script, style, object, embed, form, input, button, textarea, select')
    .forEach((node) => node.remove())

  documentFragment.querySelectorAll<HTMLElement>('*').forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase()
      const value = attribute.value.trim()

      if (name.startsWith('on')) {
        element.removeAttribute(attribute.name)
        return
      }

      if ((name === 'href' || name === 'src') && value.toLowerCase().startsWith('javascript:')) {
        element.removeAttribute(attribute.name)
      }
    })

    if (element instanceof HTMLAnchorElement && element.target === '_blank') {
      element.rel = element.rel ? `${element.rel} noopener noreferrer`.trim() : 'noopener noreferrer'
    }
  })

  return documentFragment.body.innerHTML
}

export function getTermsByTaxonomy(terms: WPTerm[][] | undefined, taxonomy: string) {
  if (!terms) {
    return []
  }

  return terms.flat().filter((term) => term.taxonomy === taxonomy)
}
