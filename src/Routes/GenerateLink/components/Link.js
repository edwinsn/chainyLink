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
    id
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

    return (
        <>
            <input
                placeholder={'https://'}
                className={`${className} w-90`}
                onChange={handleChanged}
                onFocus={isLast ? onFocused : null}
                onBlur={isLast ? onBlurred : null}
            />
            <LinkColorPicker id={id} />
        </>
    )
}
