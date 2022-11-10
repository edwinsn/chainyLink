import React from 'react'
import { addLink, removeLink } from '../../../reducers/features/links'
import { useDispatch } from 'react-redux'

import { Draggable } from "react-beautiful-dnd";
import Link from './Link';


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const grid = 8;



export default function LinkInput({ isLast, id, index, parentLink }) {

    const dispatch = useDispatch()
    const onFocused = () => dispatch(addLink())
    const onBlurred = (ev) => {
        if (ev.target.value === '') dispatch(removeLink())
    }

    const place = Math.random()

    return (


        <Draggable key={id} draggableId={`item-${id}`} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <Link
                        placeholder={place}
                        className={`${isLast && 'new-link'} mt-1`}
                        onFocus={isLast ? onFocused : null}
                        onBlur={isLast ? onBlurred : null}
                        position={index}
                        parentLink={parentLink}
                    />
                </div>
            )}
        </Draggable>

    )
}