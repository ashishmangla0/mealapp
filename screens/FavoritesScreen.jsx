import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const FavoritesScreen = () => {
  const favoritesMealsIdCtx = useContext(FavoritesContext);

  console.log(favoritesMealsIdCtx?.ids);

  const favoriteMeals = MEALS.filter((meal) =>favoritesMealsIdCtx?.ids.includes(meal.id));


  

  return(
    favoriteMeals.length > 0 ? <MealsList items={favoriteMeals}/> : <View style={styles.rootContainer}><Text style={styles.text}>You have no favorite meals yet.</Text></View>
  )
};

export default FavoritesScreen;


const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18
    }
})

