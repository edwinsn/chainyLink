import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'links',
    initialState: { numberOfLinks: 2 },
    reducers: {
        addLink: (state) => {
            state.numberOfLinks = state.numberOfLinks < 100 ? state.numberOfLinks + 1 : 100
        },
        removeLink: (state) => {
            state.numberOfLinks = state.numberOfLinks > 0 ? state.numberOfLinks - 1 : 0
        }
    },
})

export const { addLink, removeLink } = cardsSlice.actions

export default cardsSlice.reducer