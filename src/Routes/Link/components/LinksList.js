import React from 'react'
import Link from './Link'

export default function LinksList({ links }) {

    return (
        <div className='centered flex-column'>
            {
                links?.map((link, index) => (
                    <Link
                        content={link.url}
                        id={`link-${index}`}
                        key={`link-${index}`}
                        backgroundColor={link.background}
                    />
                ))
            }
        </div>
    )
}