import React from 'react'
import CopiableText from '../../../Components/CopiableText'

export default function Link({ id, content, backgroundColor }) {

    const style = { backgroundColor }

    let isThereBackground = (backgroundColor === '#ffffff' || !backgroundColor)

    return (
        <div
            className='link-container flex centered rounded'
            style={style}
        >
            <a
                href={content}
                className={`${isThereBackground ? 'black' : 'white'}`}
            >
                {content}
            </a>
            <div className='copy-child-link-icon flex'>
                <CopiableText
                    text={content}
                    putAtSide={false}
                />
            </div>
        </div>
    )

}