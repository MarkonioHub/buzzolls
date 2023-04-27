import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurants: [],
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        SET_RESTAURANTS: (state, action) => {
            state.restaurants = action.payload
        }
    },
})

export const { SET_RESTAURANTS } = restaurantsSlice.actions
export default restaurantsSlice.reducer
