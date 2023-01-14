import React from 'react'
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { setLinkWhoseColorIsBeingModified } from '../../../reducers/features/links'
import { useDispatch } from 'react-redux';

export default function LinkColorPicker({ id, position, parentLink, className }) {

    const dispatch = useDispatch()
    const openModal = () => dispatch(setLinkWhoseColorIsBeingModified({ position, parentLink, id }));

    return (
        <div className={className}>
            <span
                onClick={openModal}
            >
                <FontAwesomeIcon
                    icon={faPalette}
                />
            </span>
        </div>
    )

}