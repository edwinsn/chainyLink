import React from 'react'
import { useSelector } from 'react-redux'

export default function Link({ id, content }) {

    const backgroundColor = useSelector(state => state.links?.[id]?.backgroundColor)

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