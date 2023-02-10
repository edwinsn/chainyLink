import axios from 'axios';
import { REACT_APP_API_URL} from '../../../api'

export default function patchLink({
    parentLink,
    positionToModify,
    newLinkText,
    background,
    newLinkBackground,
    newImage
}) {


    return axios.patch(`${REACT_APP_API_URL}/links/${parentLink}`, {
        positionToModify,
        newLinkText,
        background,
        newLinkBackground,
        newImage
    })

}