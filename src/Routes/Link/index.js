import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
import LinkImage from './components/LinkImage'
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
        <section className='text-center'>
            <header
                className='flex flex-column'
                id='link-name'>
                <LinkImage src={link?.image} name={link?.name || link?.childLinks?.[0]?.url} />
                <div>{link?.name || 'Your Links'}</div>
            </header>
            <LinksList links={link?.childLinks} />
        </section>
    )
}