import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
//import ParentLink from './components/ParentLink'
import useLink from './hooks/useLink'
import './Assets/links.css'
import { useDispatch } from 'react-redux'
import { setBackgroundColor } from '../../reducers/features/links'

export default function Link() {

    const id = window.location.pathname.split('/')[2]
    const [link] = useLink(id)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setBackgroundColor(link?.background))

    }, [link?.background, dispatch])

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