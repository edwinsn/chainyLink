import useFetch from '../../../hooks/useFetch'
import useFromLocalStorage from '../../../hooks/useFromLocalStorage'

export default function useNewLink() {

  const owner = useFromLocalStorage('user')?.uid
  return useFetch('/links', 'parentLink', { owner }, { refetchOnWindowFocus: false })

}