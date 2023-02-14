import { createSlice } from '@reduxjs/toolkit'

const defaultBackground = '#EDF2FB'

export const cardsSlice = createSlice({
    name: 'links',
    initialState: {
        numberOfLinks: 2,
        backgroundColor: defaultBackground,
        colorModal: {},
        focusedLink: 0,
    },
    reducers: {
        addLink: (state, action) => {

            //check if the next input is empty if so just focus it and don't add a new one
            const nextInput = document.getElementById(`link-${action.payload?.activeLink + 1}`)

            if (!(nextInput && nextInput.value === '')) {
                state.numberOfLinks = state.numberOfLinks < 100 ? state.numberOfLinks + 1 : 100
            }

            state.focusedLink = !isNaN(action.payload?.activeLink) ? action.payload.activeLink + 1 : state.focusedLink

        },
        removeLink: (state, action) => {
            state.numberOfLinks = state.numberOfLinks > 1 ? state.numberOfLinks - 1 : 1
            state.focusedLink = (!isNaN(action.payload?.activeLink) && action.payload?.activeLink > 0) ? action.payload.activeLink - 1 : state.focusedLink
        },
        setLinksNumber: (state, action) => {
            state.numberOfLinks = action.payload
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
    setLinkWhoseColorIsBeingModified,
    setLinksNumber,
} = cardsSlice.actions

export default cardsSlice.reducer