import useFetch from '../../../hooks/useFetch'

export default function useNewLink() {

  return useFetch('/links', 'parentLink')

}