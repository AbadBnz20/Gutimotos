import { useQuery } from '@tanstack/react-query'
import { getColors } from '../actions/get-color.action'

export const useColor = () => {
  return useQuery({
    queryKey: ["color"],
    queryFn: () => getColors(),
    retry:2,
    staleTime:0
  })
}
