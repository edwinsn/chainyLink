import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LinkInput from './LinkInput'


import { DragDropContext, Droppable } from "react-beautiful-dnd";



const reorder = (list, startIndex, endIndex) => {

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;

};

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: '100%'
});




export default function LinksList() {

    const numberOfLinks = useSelector(state => state).numberOfLinks || 0
    const [links, setLinks] = useState(new Array(numberOfLinks).fill(0).map((_, index) => ({
        id: index,
        content: `item ${index}`
    })));








    const onDragEnd = (result) => {

        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const sortedLinks = reorder(
            links,
            result.source.index,
            result.destination.index
        );

        setLinks(sortedLinks);

    }






    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >



                        {
                            links.map(({ id }, index) => (
                                <LinkInput
                                    key={`link-${id}`}
                                    isLast={index === numberOfLinks - 1}
                                    id={id}
                                    index={index} />
                            ))
                        }




                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    )
}