import React from 'react'
import Modal from 'react-responsive-modal'
import { CirclePicker } from 'react-color'
import { useDispatch } from 'react-redux'
import { setLinkColor } from '../../../reducers/features/links'
import patchLink from '../services/patchLink'
import { useSelector } from 'react-redux'
import { setLinkWhoseColorIsBeingModified } from '../../../reducers/features/links'

const colors = ["#FFFFFF", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4",
    "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]

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
        patchLink({
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
                    colors={colors}
                />
            </div>
        </Modal>
    )

}