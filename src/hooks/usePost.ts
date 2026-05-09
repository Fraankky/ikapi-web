import { useQuery } from '@tanstack/react-query'
import { getPostBySlug } from '../lib/wordpress'

export function usePost(slug: string) {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug),
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(slug),
  })
}
