import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        SET_CATEGORIES: (state, action) => {
            state.categories = action.payload
        }
    },
})

export const { SET_CATEGORIES } = categoriesSlice.actions
export default categoriesSlice.reducer
