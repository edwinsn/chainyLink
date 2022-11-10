import axios from 'axios';

export default function updateLink({
    parentLink,
    positionToModify,
    newLinkText,
}) {

    const api = process.env.REACT_APP_API_URL

    return axios.put(`${api}/links/${parentLink}`, {
        positionToModify,
        newLinkText,
    })

}