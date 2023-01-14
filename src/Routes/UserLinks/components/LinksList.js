import React from 'react'
import CopiableText from '../../../Components/CopiableText'
import EditLink from './EditLink';

export default function LinksList({ links }) {
    return (

        links?.map(link => (
            <div className='link-container flex centered '>
                <a
                    href={`link/${link.parentLink}`}
                    className='bg-white rounded p-4 w-50 text-center my-2'>
                    {link.parentLink}
                </a>
                <CopiableText text={link.parentLink} />
                <EditLink link={link.parentLink} />
            </div>
        ))

    )
}