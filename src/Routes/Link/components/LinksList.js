import React from 'react'
import Link from './Link'

export default function LinksList({ links }) {

    return (
        <div className='centered flex-column'>
            {
                links?.map((link, index) => (
                    <Link
                        content={link}
                        id={`link-${index}`}
                        key={`link-${index}`}
                    />
                ))
            }
        </div>
    )
}