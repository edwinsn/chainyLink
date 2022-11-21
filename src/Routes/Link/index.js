import React from 'react'
import LinksList from './components/LinksList'
//import ParentLink from './components/ParentLink'
import useLink from './hooks/useLink'
import './Assets/links.css'

export default function Link() {

    const id = window.location.pathname.split('/')[2]
    const [link] = useLink(id)

    return (
        <section>
            {/* <ParentLink id={newLink} />*/}
            <header className='text-center'>
                {link?.name || 'Your Links'}
            </header>
            <LinksList links={link?.childLinks} />
        </section>
    )
}