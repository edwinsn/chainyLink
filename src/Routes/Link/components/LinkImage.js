import React from 'react'

export default function LinkImage({ src, name = 'L' }) {
    return (
        src ?
            <img
                src={src}
                alt=''
                id='link-image'
            /> : (
                <div
                    id='link-image'
                    className='bg-white centered auxiliar-link-image'
                >
                    {name[0].toUpperCase()}
                </div>
            )
    )
}
