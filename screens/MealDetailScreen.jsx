import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/features/favoriteSlice";

const MealDeatilScreen = ({ route, navigation }) => {
const FavoriteMealId = useSelector(state=> state?.favoriteMeals?.ids)
  const dispatch = useDispatch(); 

  const FavoriteMealCtx =  useContext(FavoritesContext)
  const mealId = route?.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal?.id === mealId);

  const mealIsFav = FavoriteMealId.includes(mealId)



  const changeFavStatusHandler = () => {
   
    if(mealIsFav){
     dispatch(removeFavorite(mealId))
    }
    else{
      dispatch(addFavorite(mealId))
    }
    
    
    
  };

  useLayoutEffect(() => {
    navigation.setOptions({
        title: selectedMeal?.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavStatusHandler}
            icon={mealIsFav ? 'star': 'star-outline'}
            color={"white"}
          />
        );
      },
    });
  }, [navigation,changeFavStatusHandler,selectedMeal?.title]);




  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={style.image} />
        <Text style={style.title}>{selectedMeal?.title}</Text>
      </View>

      <MealDetails
        complexity={selectedMeal?.complexity}
        duration={selectedMeal?.duration}
        affordability={selectedMeal.affordability}
        textStyle={style?.detailText}
      />

      <View style={style?.listOuter}>
        <View style={style.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDeatilScreen;

const style = StyleSheet?.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuter: {
    alignItems: "center",
  },
});
