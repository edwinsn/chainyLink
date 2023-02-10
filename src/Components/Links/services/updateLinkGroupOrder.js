import axios from 'axios';
import { REACT_APP_API_URL} from '../../../api'

export default function patchLinkGroupOrder({
    parentLink,
    linkUpdated,
}) {

    const api = REACT_APP_API_URL

    return axios.patch(`${api}/links/${parentLink}`, {
        newOrder: linkUpdated,
    })

}