import axios from 'axios';

export default function fetchApi(url, params) {

    const api = process.env.REACT_APP_API_URL

    const controller = new AbortController();
    const signal = controller.signal
    const endpoint = `${api}/${url}`

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