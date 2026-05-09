import { useQuery } from '@tanstack/react-query'
import { getAllPages } from '../lib/wordpress'

export function usePages() {
  return useQuery({
    queryKey: ['pages'],
    queryFn: getAllPages,
    staleTime: 1000 * 60 * 60 * 24,
  })
}
