import { createContext, useState } from "react";
import { Text } from "react-native";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavId) => [...currentFavId, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  };

  const values = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
