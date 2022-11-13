import useFetch from '../../../hooks/useFetch'

export default function useNewLink(id) {

  return useFetch(`/links/${id}`, 'linkGroup')

}