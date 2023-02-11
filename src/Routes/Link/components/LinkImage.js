import React from 'react'

export default function LinkImage({
    src,
    name = 'L',
    loading,
}) {
    return (
        src ?
            <img
                className={`my-4 bg-white`}
                src={src}
                alt=''
                id='link-image'
            /> : (
                <div
                    id='link-image'
                    className={`${loading ? 'skeleton' : 'bg-white'} flex centered auxiliar-link-image my-4 `}
                >
                    {name[0].toUpperCase()}
                </div>
            )
    )
}