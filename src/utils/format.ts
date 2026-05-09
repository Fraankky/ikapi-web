export function stripHtml(html = '') {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim()
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
