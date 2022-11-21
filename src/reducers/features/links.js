import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'links',
    initialState: { numberOfLinks: 2, backgroundColor: '#EDF2FB' },
    reducers: {
        addLink: (state) => {
            state.numberOfLinks = state.numberOfLinks < 100 ? state.numberOfLinks + 1 : 100
        },
        removeLink: (state) => {
            state.numberOfLinks = state.numberOfLinks > 0 ? state.numberOfLinks - 1 : 0
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        }
    },
})

export const { addLink, removeLink, setBackgroundColor } = cardsSlice.actions

export default cardsSlice.reducer