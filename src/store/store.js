import { configureStore } from '@reduxjs/toolkit'

import localities from './slices/localitiesSlice'
import restaurants from './slices/restaurantsSlice'
import slides from './slices/slidesSlice'

export const store = configureStore({
    reducer: { localities, restaurants, slides },
})
