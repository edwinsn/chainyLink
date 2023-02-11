import React from 'react'
import CopiableText from '../../../Components/CopiableText'
import EditLink from './EditLink';

export default function LinksList({ links }) {
    
    return (
        links?.map(link => (
            <div className='link-container flex centered bg-white rounded my-2 mw-22 w-100'>
                <a
                    href={`link/${link.parentLink}`}
                    className='rounded p-4 w-50 text-center '>
                    {link.name || link.parentLink}
                </a>
                <CopiableText text={link.parentLink} />
                <EditLink link={link.parentLink} />
            </div>
        ))

    )
}