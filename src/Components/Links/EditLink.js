import React, { useEffect } from 'react'
import LinksList from './components/LinksList'
import chainyIcon from '../../Assets/Images/chainyicon.svg'
import ParentLink from './components/ParentLink'
import BackgroundColorPicker from './components/BackgroundColorPicker'
import LinkImage from './components/LinkImage'
import './Assets/index.css'
import { setBackgroundColor } from '../../reducers/features/links'
import { useDispatch } from 'react-redux'
import { ColorModal } from './components/ColorModal'
import useIsPhoneView from '../../hooks/useIsPhoneView'

export default function GenerateLink({ parentLink, childLinks }) {

    const dispatch = useDispatch()
    const isPhoneView = useIsPhoneView()

    useEffect(() => {

        dispatch(setBackgroundColor('#EDF2FB'))

    }, [dispatch])

    return (
        <section id='generate-link-section'>
            <header className='flex wrap centered fs-1 px-2'>
                <img
                    src={chainyIcon}
                    alt=''
                    style={{ height: isPhoneView && '1.35em' }}
                />
                <span className='text-center'>
                    Chain your
                    <span className='pink ml-1'>
                        Links
                    </span>
                </span>
            </header>
            <h2 className='text-center fs-3 my-3 px-1'>
                Share the good stuff with one link
            </h2>
            <ParentLink id={parentLink} />
            <LinkImage parentLink={parentLink} />
            <BackgroundColorPicker parentLink={parentLink} />
            <LinksList parentLink={parentLink} childLinks={childLinks} />
            <ColorModal />
        </section>
    )
}