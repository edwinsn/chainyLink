import React from 'react'
import LinksList from './components/LinksList'
import LinkImage from './components/LinkImage'
import useLink from '../../Components/Links/hooks/useLink'
import './Assets/links.css'
import useCurrentUrl from '../../hooks/useCurrentUrl'
import EditLink from './components/EditLink'

export default function Link() {

    const url = useCurrentUrl()
    const id = url.split('/')[2]
    let [link, loading] = useLink(id)

    link = {}
    loading = true

    return (
        <section className='text-center'>
            <header
                className='flex flex-column align-items-center'
                id='link-name'>
                <LinkImage
                    src={link?.image}
                    name={link?.name || link?.childLinks?.[0]?.url}
                    className
                    loading={loading}
                />
                <div>
                    {link?.name || 'Your Links'}
                </div>
            </header>
            <EditLink parentLink={link?.parentLink} />
            <LinksList
                links={link?.childLinks}
                loading={loading}
            />
        </section>
    )
}