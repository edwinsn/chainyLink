import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export default function EditLink({ link }) {
    return (
        <a href={`/link/${link}/edit`}>
            <FontAwesomeIcon
                icon={faPenToSquare}
                className="mr-1" />
        </a>
    )
}