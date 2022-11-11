import axios from 'axios';

export default function updateLinkGroupOrder({
    parentLink,
    linkUpdated,
}) {

    const api = process.env.REACT_APP_API_URL

    return axios.patch(`${api}/links/${parentLink}`, {
        newOrder: linkUpdated,
    })

}