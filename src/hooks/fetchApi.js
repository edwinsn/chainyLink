import axios from 'axios';
import { REACT_APP_API_URL} from '../api'

export default function fetchApi(url, params) {


    const controller = new AbortController();
    const signal = controller.signal
    const endpoint = `${REACT_APP_API_URL}${url}`

    const dataPromise = axios.get(endpoint,
        {
            signal,
            params,
        })

    const cancel = () => {
        controller.abort()
    }

    return [dataPromise, cancel]

}