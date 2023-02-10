import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import { useSelector } from 'react-redux'
import { setBackgroundColor } from '../../../reducers/features/links'
import { useDispatch } from 'react-redux'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import patchLink from '../services/patchLink'

export default function BackgroundColorPicker({ parentLink }) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const dispatch = useDispatch()
    const color = useSelector(state => state.links?.backgroundColor)
    const handleChangeComplete = (color) => {
        dispatch(setBackgroundColor(color.hex))
        patchLink({
            parentLink,
            background: color.hex
        })
    }


    return (
        <div id='background-color-picker'>
            <span
                onClick={onOpenModal}
            >
                <FontAwesomeIcon
                    icon={faPalette}
                />
            </span>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='color-picker-modal-body'>
                    <CirclePicker
                        color={color}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            </Modal>
        </div>
    )
}