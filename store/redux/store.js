import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from '../features/favoriteSlice'

const store = configureStore({
reducer:{
    favoriteMeals: favoritesReducer
}
})

export default store