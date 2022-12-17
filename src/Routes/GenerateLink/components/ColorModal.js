import React from 'react'
import Modal from 'react-responsive-modal'
import { CirclePicker } from 'react-color'
import { useDispatch } from 'react-redux'
import { setLinkColor } from '../../../reducers/features/links'
import updateLink from '../services/updateLink'
import { useSelector } from 'react-redux'
import { setLinkWhoseColorIsBeingModified } from '../../../reducers/features/links'

export const ColorModal = (props) => {

    const dispatch = useDispatch()
    
    const data = useSelector(state => state.colorModal)

    const { position, parentLink, id } = data

    const closeModal = () => {
        dispatch(setLinkWhoseColorIsBeingModified({}))
    }

    const handleChangeComplete = (color) => {

        const payload = {
            id,
            backgroundColor: color.hex
        }

        dispatch(setLinkColor(payload))
        updateLink({
            newLinkBackground: color.hex,
            positionToModify: position,
            parentLink,
        })
        closeModal()

    }

    return (
        <Modal open={!isNaN(position)} onClose={closeModal} center>
            <div className='color-picker-modal-body'>
                <CirclePicker
                    onChangeComplete={handleChangeComplete}
                />
            </div>
        </Modal>
    )

}