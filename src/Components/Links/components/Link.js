import React from 'react'
import updateLink from '../services/updateLink'
import debounce from '../../../utils/debounce'
import { addLink, removeLink } from '../../../reducers/features/links'
import { useDispatch } from 'react-redux'
import LinkColorPicker from './LinkColorPicker'

export default function Link({
    className,
    position,
    parentLink,
    isLast,
    id,
    backgroundColor,
    defaultValue,
}) {

    const handleChanged = debounce((ev) => {
        const newLinkText = ev.target.value
        updateLink({
            newLinkText,
            positionToModify: position,
            parentLink,
        })
    })

    const dispatch = useDispatch()
    const onFocused = () => dispatch(addLink())
    const onBlurred = (ev) => {
        if (ev.target.value === '') dispatch(removeLink())
    }

    const hasBackgroundColor = backgroundColor && backgroundColor !== '#ffffff'

    const inputStyle = {
        color: hasBackgroundColor ? 'white' : 'black',
        fontWeight: hasBackgroundColor ? 'bold' : 'normal',
        backgroundColor: backgroundColor ? backgroundColor : 'white',
    }

    return (

        <div className='w-100 draggable-link flex' >
            <input
                placeholder={'https://'}
                className={`${className} w-100`}
                onChange={handleChanged}
                onFocus={isLast ? onFocused : null}
                onBlur={isLast ? onBlurred : null}
                style={inputStyle}
                defaultValue={defaultValue}
            />
            <LinkColorPicker
                id={id}
                parentLink={parentLink}
                position={position}
                className='link-color-picker'
            />
        </div>
    )
}
