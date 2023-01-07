import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
import LinkImage from './components/LinkImage'
import useLink from './hooks/useLink'
import './Assets/links.css'
import { useDispatch } from 'react-redux'
import { setBackgroundColor } from '../../reducers/features/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


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
                <div>
                    {link?.name || 'Your Links'}
                </div>
            </header>
            <div className='flex justify-center my-2'>
                <div className='w-80 flex justify-end'>
                    <a href={`/link/${link?.parentLink}/edit`}
                        className='p-1 bg-white circle-rounded text-center'
                    >
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            className='mx-1'
                        />
                    </a>
                </div>
            </div>
            <LinksList links={link?.childLinks} />
        </section>
    )
}