import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setBackgroundColor } from '../../../reducers/features/links'


export default function useNewLink(id) {

  const link = useFetch(`/links/${id}`, 'linkGroup')

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(setBackgroundColor(link?.background))

  }, [link?.background, dispatch])

  return link

}