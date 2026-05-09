import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../lib/wordpress'

export function usePosts(perPage = 10) {
  return useQuery({
    queryKey: ['posts', perPage],
    queryFn: () => getAllPosts(perPage),
    staleTime: 1000 * 60 * 30,
  })
}
