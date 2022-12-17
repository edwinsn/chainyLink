import { createSlice } from '@reduxjs/toolkit'

const defaultBackground = '#EDF2FB'

export const cardsSlice = createSlice({
    name: 'links',
    initialState: {
        numberOfLinks: 2,
        backgroundColor: defaultBackground,
        colorModal: {}
    },
    reducers: {
        addLink: (state) => {
            state.numberOfLinks = state.numberOfLinks < 100 ? state.numberOfLinks + 1 : 100
        },
        removeLink: (state) => {
            state.numberOfLinks = state.numberOfLinks > 0 ? state.numberOfLinks - 1 : 0
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload || defaultBackground
        },
        setLinkColor: (state, action) => {
            const { id, backgroundColor } = action.payload
            state[id] = { backgroundColor }
        },
        setLinkWhoseColorIsBeingModified: (state, action) => {

            const { position, parentLink, id } = action.payload
            
            state.colorModal.position = position
            state.colorModal.parentLink = parentLink
            state.colorModal.id = id

        }
    },
})

export const {
    addLink,
    removeLink,
    setBackgroundColor,
    setLinkColor,
    setLinkWhoseColorIsBeingModified
} = cardsSlice.actions

export default cardsSlice.reducer