import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMobileMenuOpen: false,
}

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        SET_IS_MOBILE_MENU_OPEN: (state, action) => {
            state.isMobileMenuOpen = action.payload
        }
    },
})

export const { SET_IS_MOBILE_MENU_OPEN } = mobileMenuSlice.actions
export default mobileMenuSlice.reducer
