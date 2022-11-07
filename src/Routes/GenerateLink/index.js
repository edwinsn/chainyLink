import React from 'react'
import LinksList from './components/LinksList'
import chainyIcon from '../../Assets/Images/chainyicon.svg'

export default function index() {

    return (
        <section>
            <header>
                <img src={chainyIcon} alt='' />
                Chain your links
            </header>
            <h2>
                Share everything you want throw one single link,
                send playlist from diferent sites, shoping cars,
                whatever you want!
            </h2>
            <LinksList />
        </section>
    )
}
