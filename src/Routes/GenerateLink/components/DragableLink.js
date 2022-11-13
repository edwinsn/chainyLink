import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import Link from './Link';
import dragIcon from '../../../Assets/Images/dragIcon.svg'


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
                    className='flex-end'
                >
                    <img
                        src={dragIcon}
                        alt='drag link'
                    />
                    <Link
                        className={`${isLast && 'new-link'} mt-1`}
                        position={index}
                        parentLink={parentLink}
                        isLast={isLast}
                    />
                </div>
            )}
        </Draggable>
    )
}