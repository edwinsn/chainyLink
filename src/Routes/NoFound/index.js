import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkSlash } from '@cseitz/icons-duotone';


export default function index() {
    return (
        <section className='flex centered'>
            <a
                href='/'
                className='circle-rounded bg-gray flex centered px-2 py-1 pointer no_decoration'>
                <FontAwesomeIcon
                    icon={faLinkSlash}
                    className="mr-1" />
                <span className='gray'>
                    Page not found
                </span>
            </a>
        </section>
    )
}
