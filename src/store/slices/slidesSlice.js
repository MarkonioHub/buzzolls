import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    slides: [],
}

export const slidesSlice = createSlice({
    name: 'slides',
    initialState,
    reducers: {
        SET_SLIDES: (state, action) => {
            state.slides = action.payload
        }
    },
})

export const { SET_SLIDES } = slidesSlice.actions
export default slidesSlice.reducer
