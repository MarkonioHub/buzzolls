import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    localities: [],
    currentLocality: {},
    isLocalitiesModalOpen: false
}

export const localitiesSlice = createSlice({
    name: 'localities',
    initialState,
    reducers: {
        SET_LOCALITIES: (state, action) => {
            state.localities = action.payload
        },
        SET_CURRENT_LOCALITIES: (state, action) => {
            state.currentLocality = action.payload
        },
        IS_LOCALITIES_MODAL_OPEN: (state, action) => {
            state.isLocalitiesModalOpen = action.payload
        },
    },
})

export const { SET_LOCALITIES, SET_CURRENT_LOCALITIES, IS_LOCALITIES_MODAL_OPEN } = localitiesSlice.actions
export default localitiesSlice.reducer
