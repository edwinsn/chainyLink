import React from 'react'
import CopiableText from '../../../Components/CopiableText'

export default function Link({ id, content, backgroundColor }) {

    const style = { backgroundColor }

    return (
        <div
            className='link-container flex centered rounded'
            style={style}
        >
            <a
                href={content}
                className={`${backgroundColor === '#ffffff' ? 'black' : 'white'}`}
            >
                {content} {backgroundColor}
            </a>
            <CopiableText text={content} />
        </div>
    )

}