import React from 'react'
import LinksList from './components/LinksList'
//import ParentLink from './components/ParentLink'
import useLink from './hooks/useLink'

export default function Link() {

    const id = window.location.pathname.split('/')[2]
    const [link] = useLink(id)

    return (
        <section>
            {/* <ParentLink id={newLink} />*/}
            <LinksList links={link?.childLinks} />
        </section>
    )
}