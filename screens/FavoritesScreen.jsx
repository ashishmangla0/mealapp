import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoriteMealsa = useSelector((state) => state?.favoriteMeals);

  // const favoritesMealsIdCtx = useContext(FavoritesContext);

  // console.log(favoritesMealsIdCtx?.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsa?.ids.includes(meal.id)
  );

  console.log(favoriteMealsa);

  return favoriteMeals?.length > 0 ? (
    <MealsList items={favoriteMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
