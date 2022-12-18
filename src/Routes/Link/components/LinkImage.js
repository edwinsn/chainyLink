import React from 'react'

export default function LinkImage({ src, name = 'L' }) {
    return (
        src ?
            <img
                className='my-4'
                src={src}
                alt=''
                id='link-image'
            /> : (
                <div
                    id='link-image'
                    className='bg-white flex centered auxiliar-link-image my-4'
                >
                    {name[0].toUpperCase()}
                </div>
            )
    )
}
