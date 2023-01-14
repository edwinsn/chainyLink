import React from 'react'
import useNewLink from '../../Components/Links/hooks/useNewLink'

import EditLink from '../../Components/Links/EditLink'

export default function GenerateLink() {

    const [newLink] = useNewLink()

    return (
        <EditLink parentLink={newLink} />
    )
}