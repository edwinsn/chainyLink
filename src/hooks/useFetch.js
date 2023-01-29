import { useQuery } from 'react-query'
import axios from "axios";
import config from '../api'



export default function useFetch(url, dataToExtract, params = {}) {


    const { isLoading, data, refetch } = useQuery(url, () => {

        const endpoint = `${config.REACT_APP_API_URL}${url}`

        return axios.get(
            endpoint,
            {
                params
            })

    })

    let dataExtracted

    //Get the data requested
    if (typeof dataToExtract === 'string') {

        dataExtracted = data?.data?.[dataToExtract]

    }
    else if (Array.isArray(dataToExtract)) {

        dataExtracted = dataToExtract.reduce((acc, curr) => {

            acc[curr] = data?.data?.[curr]

            return acc

        }, {})

    }


    //Check if there is data
    let isThereData

    if (typeof dataToExtract === 'string') {

        isThereData = Array.isArray(dataExtracted) ? dataExtracted.length !== 0 : (typeof data === 'object' && Object.values(data || {}).length !== 0)

    } else if (Array.isArray(dataToExtract)) {

        const mainData = Object.values(dataExtracted)[0]
        isThereData = Array.isArray(mainData) ? mainData.length !== 0 : (typeof mainData === 'object' && Object.values(mainData || {}).length !== 0)

    }

    const noData = !isThereData && !isLoading

    return [dataExtracted, isLoading, noData, refetch]

}