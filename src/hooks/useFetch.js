import { useEffect, useState } from 'react'
import fetchApi from './fetchApi'

export default function useFetch(url, dataToExtract, params = '{}') {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [noData, setNoData] = useState(false)

    useEffect(() => {

        setLoading(true)
        setNoData(false)

        const [dataPromise, cancel] = fetchApi(url, JSON.parse(params))

        dataPromise
            .then((res) => {

                const data = res?.data?.[dataToExtract]

                setData(data)

                const isThereData = Array.isArray(data) ? data.length !== 0 : (typeof data === 'object' && Object.values(data || {}).length !== 0)

                setNoData(!isThereData)

            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => cancel()



    }, [dataToExtract, url, params])

    return [data, loading, noData]

}