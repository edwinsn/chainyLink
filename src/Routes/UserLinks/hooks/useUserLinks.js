import useFetch from '../../../hooks/useFetch'

export default function useUserLinks({ userId }) {

    return useFetch(`/users/${userId}/links`, 'linksGroups')

}