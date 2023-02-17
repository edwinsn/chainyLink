import axios from 'axios';
import { REACT_APP_API_URL } from '../../../api'

export default function patchLink({
    parentLink,
    name,
    cancelToken,
}) {


    return axios.put(
        `${REACT_APP_API_URL}/links/${parentLink}`,
        {
            name
        }, {
        cancelToken
    })

}