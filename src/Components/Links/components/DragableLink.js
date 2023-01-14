import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import Link from './Link';

import { useSelector } from 'react-redux';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    margin: `0 0 ${grid}px 0`,
    // change background colour if dragging
    backgroundColor: isDragging ? "lightgreen" : "grey",
    // styles we need to apply on draggables
    ...draggableStyle
});

const grid = 16;



export default function LinkInput({ isLast, id, index, parentLink, defaultValue }) {

    const backgroundColor = useSelector(state => state[id]?.backgroundColor)

    return (
        <Draggable
            key={id}
            draggableId={`item-${id}`}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        ),
                        backgroundColor: 'transparent'
                    }}
                    className='flex justify-around rounded'
                >
                    <Link
                        className={`${isLast && 'new-link'} grow`}
                        position={index}
                        parentLink={parentLink}
                        isLast={isLast}
                        id={id}
                        defaultValue={defaultValue}
                        backgroundColor={backgroundColor}
                    />
                </div>
            )}
        </Draggable>
    )
}