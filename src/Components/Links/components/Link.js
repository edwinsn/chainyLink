import React from 'react'
import patchLink from '../services/patchLink'
import debounce from '../../../utils/debounce'
import { addLink, removeLink } from '../../../reducers/features/links'
import { useDispatch } from 'react-redux'
import LinkColorPicker from './LinkColorPicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
        patchLink({
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
        <div className='w-100 draggable-link flex centered' >

            <input
                placeholder={'https://'}
                className={`${className} w-100 second`}
                onChange={handleChanged}
                onFocus={isLast ? onFocused : null}
                onBlur={isLast ? onBlurred : null}
                style={inputStyle}
                defaultValue={defaultValue}
                type="text"
            />
            <i className='first'>
                <FontAwesomeIcon
                    icon={faBars}
                    className="mr-1" />
            </i>
            <LinkColorPicker
                id={id}
                parentLink={parentLink}
                position={position}
                className='link-color-picker third'
            />
        </div>
    )
}
