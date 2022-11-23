import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
import chainyIcon from '../../Assets/Images/chainyicon.svg'
import ParentLink from './components/ParentLink'
import useNewLink from './hooks/useNewLink'
import BackgroundColorPicker from './components/BackgroundColorPicker'
import './Assets/index.css'
import { setBackgroundColor } from '../../reducers/features/links'
import { useDispatch } from 'react-redux'

export default function GenerateLink() {

    const [newLink] = useNewLink()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setBackgroundColor('#EDF2FB'))

    }, [dispatch])

    return (
        <section id='generate-link-section'>
            <header className='text-center'>
                <img src={chainyIcon} alt='' />
                Chain your links
            </header>
            <h2 className='text-center'>
                Share everything you want throw one single link,
                send playlist from diferent sites, shoping cars,
                whatever you want!
            </h2>
            <ParentLink id={newLink} />
            <BackgroundColorPicker parentLink={newLink} />
            <LinksList parentLink={newLink} />
        </section>
    )
}