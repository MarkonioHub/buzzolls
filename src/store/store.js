import { configureStore } from '@reduxjs/toolkit'

import localities from './slices/localitiesSlice'
import restaurants from './slices/restaurantsSlice'
import slides from './slices/slidesSlice'
import categories from './slices/categoriesSlice'
import mobileMenu from './slices/mobileMenuSlice'
import products from './slices/productsSlice'

export const store = configureStore({
    reducer: { localities, restaurants, slides, categories, mobileMenu, products },
})
