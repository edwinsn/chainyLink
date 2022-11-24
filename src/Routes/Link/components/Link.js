import React from 'react'

export default function Link({ id, content, backgroundColor }) {

    const style = { backgroundColor }

    return (
        <div
            className='link-container'
            style={style}
        >
            {content}
        </div>
    )

}