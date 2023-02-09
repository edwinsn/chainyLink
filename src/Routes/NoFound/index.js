import React from 'react'
import brokenLinkIcon from '../../Assets/Images/broken-link.svg'

export default function index() {
    return (
        <section className='flex centered'>
            <a 
            href='/'
            className='circle-rounded bg-gray flex centered px-2 py-1 pointer no_decoration'>
                <img
                    src={brokenLinkIcon}
                    alt="" 
                    className='h-1 mr-1'
                    />
                <span className='gray'>
                    Page not found
                </span>
            </a>
        </section>
    )
}
