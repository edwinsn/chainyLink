import React from 'react'
import EditLink from '../../Components/Links/EditLink'
import useLink from '../../Components/Links/hooks/useLink'

export default function Link() {

    const parentLink = window.location.pathname.split('/')[2]
    const [link] = useLink(parentLink)

    return (
        <EditLink parentLink={parentLink} childLinks={link?.childLinks} />
    )

}