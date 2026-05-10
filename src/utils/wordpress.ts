import type { WPTerm } from '../types/wordpress'

const REMOVED_TAGS = [
  'script',
  'style',
  'object',
  'embed',
  'form',
  'input',
  'button',
  'textarea',
  'select',
  'iframe',
  'frame',
  'frameset',
  'meta',
  'link',
].join(',')

const URI_ATTRIBUTES = new Set([
  'action',
  'formaction',
  'href',
  'poster',
  'src',
  'srcset',
  'xlink:href',
])

const GLOBAL_REMOVED_ATTRIBUTES = new Set(['srcdoc', 'style'])

export function sanitizeWordPressHtml(html = '') {
  if (typeof window === 'undefined' || !html.trim()) {
    return html
  }

  const parser = new DOMParser()
  const documentFragment = parser.parseFromString(html, 'text/html')

  documentFragment
    .querySelectorAll(REMOVED_TAGS)
    .forEach((node) => node.remove())

  documentFragment.querySelectorAll<HTMLElement>('*').forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase()
      const value = attribute.value.trim()

      if (name.startsWith('on') || GLOBAL_REMOVED_ATTRIBUTES.has(name)) {
        element.removeAttribute(attribute.name)
        return
      }

      if (URI_ATTRIBUTES.has(name) && !isSafeUriAttribute(name, value)) {
        element.removeAttribute(attribute.name)
      }
    })

    if (element instanceof HTMLAnchorElement && element.target === '_blank') {
      element.rel = element.rel ? `${element.rel} noopener noreferrer`.trim() : 'noopener noreferrer'
    }
  })

  return documentFragment.body.innerHTML
}

function isSafeUriAttribute(name: string, value: string) {
  if (!value) {
    return true
  }

  if (name === 'srcset') {
    return value
      .split(',')
      .map((item) => item.trim().split(/\s+/)[0])
      .filter(Boolean)
      .every((url) => isSafeUrl(url, true))
  }

  return isSafeUrl(value, name === 'src' || name === 'poster', name === 'href' || name === 'xlink:href')
}

function isSafeUrl(value: string, allowDataImage = false, allowContactProtocols = false) {
  const normalizedValue = removeControlCharacters(value.trim())
  const lowerValue = normalizedValue.toLowerCase()

  if (
    lowerValue.startsWith('#') ||
    lowerValue.startsWith('/') ||
    lowerValue.startsWith('./') ||
    lowerValue.startsWith('../')
  ) {
    return true
  }

  if (allowDataImage && /^data:image\/(?:gif|png|jpeg|jpg|webp);base64,/i.test(lowerValue)) {
    return true
  }

  try {
    const url = new URL(normalizedValue, window.location.origin)
    const allowedProtocols = allowContactProtocols ? ['http:', 'https:', 'mailto:', 'tel:'] : ['http:', 'https:']
    return allowedProtocols.includes(url.protocol)
  } catch {
    return false
  }
}

function removeControlCharacters(value: string) {
  return Array.from(value)
    .filter((character) => {
      const charCode = character.charCodeAt(0)
      return charCode > 31 && charCode !== 127 && !/\s/.test(character)
    })
    .join('')
}

export function getTermsByTaxonomy(terms: WPTerm[][] | undefined, taxonomy: string) {
  if (!terms) {
    return []
  }

  return terms.flat().filter((term) => term.taxonomy === taxonomy)
}
