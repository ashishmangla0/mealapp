import { createSlice } from "@reduxjs/toolkit";

const favoriteMealsInita = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoriteMealsInita,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.ids.includes(action.payload)) {
        return {
          ...state,
          ids: [...state.ids, action.payload],
        };
      }
      return state;
    },
    removeFavorite: (state, action) => {
      return {
        ...state,
        ids: state.ids.filter((id) => id !== action.payload),
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
