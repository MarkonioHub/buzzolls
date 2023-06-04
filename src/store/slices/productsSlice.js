import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload
        }
    },
})

export const { SET_PRODUCTS } = productsSlice.actions
export default productsSlice.reducer
