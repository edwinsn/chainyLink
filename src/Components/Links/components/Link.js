import React, { useEffect } from 'react'
import patchLink from '../services/patchLink'
import debounce from '../../../utils/debounce'
import {
    addLink,
    removeLink,
    focusNextLink,
    setFocusedLink,
    focusPreviousLink,
} from '../../../reducers/features/links'
import { useDispatch } from 'react-redux'
import LinkColorPicker from './LinkColorPicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'


export default function Link({
    className,
    position,
    parentLink,
    id,
    backgroundColor,
    defaultValue,
}) {

    const isFocused = useSelector(state => state.focusedLink === position)
    const dispatch = useDispatch()
    const inputRef = React.useRef()


    const handleChanged = debounce((ev) => {

        const newLinkText = ev.target.value
        patchLink({
            newLinkText,
            positionToModify: position,
            parentLink,
        })
    })


    const hasBackgroundColor = backgroundColor && backgroundColor !== '#ffffff'

    const inputStyle = {
        color: hasBackgroundColor ? 'white' : 'black',
        fontWeight: hasBackgroundColor ? 'bold' : 'normal',
        backgroundColor: backgroundColor ? backgroundColor : 'white',
    }

    const handleKeyDown = (ev) => {

        //if enter then add a link
        if (!ev.shiftKey && ev.key === 'Enter') {
            ev.preventDefault()
            dispatch(addLink({ activeLink: position }))
            return
        }

        //if tab then move to the next link
        if (ev.key === 'Tab') {
            ev.preventDefault()
            dispatch(focusNextLink({ activeLink: position }))
            return
        }

        //if backspace and empty remove link
        if (ev.key === 'Backspace' && ev.target.value === '') {
            dispatch(removeLink({ activeLink: position }))
            return
        }

        //if arrow up and cursor at first line then move to the previous link
        if (ev.key === 'ArrowUp' && ev.target.selectionStart === 0) {
            ev.preventDefault()
            dispatch(focusPreviousLink({ activeLink: position }))
            return
        }

        //if arrow down and cursor at last line then move to the next link
        if (ev.key === 'ArrowDown' && ev.target.selectionStart === ev.target.value.length) {
            ev.preventDefault()
            dispatch(focusNextLink({ activeLink: position }))
            return
        }

    }

    const handleFocus = () => {
        dispatch(setFocusedLink(position))
    }

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus()
        }
    }, [isFocused])

    return (
        <div className='w-100 draggable-link flex centered' >

            <textarea
                ref={inputRef}
                id={`link-${position}`}
                placeholder={'https://'}
                className={`${className} w-100 second input-style h-5em`}
                onChange={handleChanged}
                onKeyDown={handleKeyDown}
                style={inputStyle}
                defaultValue={defaultValue}
                type="text"
                autoFocus={isFocused}
                onFocus={handleFocus}
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
