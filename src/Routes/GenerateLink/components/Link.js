import React from 'react'
import updateLink from '../services/updateLink'

export default function Link({
    placeholder,
    className,
    onFocus,
    onBlur,
    position,
    parentLink,
}) {

    const handleChanged = (ev) => {
        const newLinkText = ev.target.value
        updateLink({
            newLinkText,
            positionToModify: position,
            parentLink,
        })
    }

    return (
        <input
            placeholder={placeholder}
            className={className}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={handleChanged}
        />
    )
}
