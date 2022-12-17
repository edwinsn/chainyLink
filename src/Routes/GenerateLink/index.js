import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
import chainyIcon from '../../Assets/Images/chainyicon.svg'
import ParentLink from './components/ParentLink'
import useNewLink from './hooks/useNewLink'
import BackgroundColorPicker from './components/BackgroundColorPicker'
import LinkImage from './components/LinkImage'
import './Assets/index.css'
import { setBackgroundColor } from '../../reducers/features/links'
import { useDispatch } from 'react-redux'
import { ColorModal } from './components/ColorModal'

export default function GenerateLink() {

    const [newLink] = useNewLink()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setBackgroundColor('#EDF2FB'))

    }, [dispatch])

    return (
        <section id='generate-link-section'>
            <header className='text-center fs-1 flex centered'>
                <img src={chainyIcon} alt='' />
                Chain your <span className='pink'>Links</span>
            </header>
            <h2 className='text-center fs-3 my-3'>
                Share everything you want throw one single link,
                send playlist from diferent sites, shoping cars,
                whatever you want!
            </h2>
            <ParentLink id={newLink} />
            <LinkImage parentLink={newLink} />
            <BackgroundColorPicker parentLink={newLink} />
            <LinksList parentLink={newLink} />
            <ColorModal />
        </section>
    )
}