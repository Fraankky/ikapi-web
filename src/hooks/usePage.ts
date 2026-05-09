import { useQuery } from '@tanstack/react-query'
import { getPageBySlug } from '../lib/wordpress'

export function usePage(slug: string | string[]) {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const normalizedSlugs = slugs.map((item) => item.trim()).filter(Boolean)

  return useQuery({
    queryKey: ['page', normalizedSlugs],
    queryFn: () => getPageBySlug(normalizedSlugs),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: normalizedSlugs.length > 0,
  })
}
