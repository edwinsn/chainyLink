import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LinkInput from './DragableLink'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import updateLinkGroupOrder from '../services/updateLinkGroupOrder'
import { useDispatch } from 'react-redux';
import { setLinksNumber } from '../../../reducers/features/links'

const reorder = (list, startIndex, endIndex) => {

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;

};

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "transparent",
    padding: grid,
    width: '100%',
    maxWidth: '22cm',
    margin: '0 auto',
});


export default function LinksList({ parentLink, childLinks }) {

    const numberOfLinks = useSelector(state => state).numberOfLinks || 0
    const dispatch = useDispatch()

    useEffect(() => {

        const newLinksArray = new Array(numberOfLinks).fill(0).map((_, index) => ({
            id: index,
        }))
        setLinks(newLinksArray)

    }, [numberOfLinks])

    useEffect(() => {

        const newLinksArrayLength = childLinks?.length

        if (newLinksArrayLength) {
            dispatch(setLinksNumber(newLinksArrayLength))
        }

    }, [childLinks?.length, dispatch])

    const [links, setLinks] = useState(() => new Array(numberOfLinks).fill(0).map((_, index) => ({
        id: index,
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

        const previousPosition = result.source.index
        const newPosition = result.destination.index

        setLinks(sortedLinks);
        updateLinkGroupOrder({
            parentLink,
            linkUpdated: {
                previousPosition,
                newPosition,
            }
        })

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
                                    index={index}
                                    parentLink={parentLink}
                                    defaultValue={childLinks?.[index]?.url}
                                />
                            ))
                        }

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    )
}