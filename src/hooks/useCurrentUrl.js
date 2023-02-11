import { useLocation } from 'react-router-dom'

export default function useCurrentUrl() {

    const location = useLocation()

    return location.pathname

}