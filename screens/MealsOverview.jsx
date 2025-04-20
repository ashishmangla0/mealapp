import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverView = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData?.item;

    const mealItemProps = {
      id: item?.id,
      title: item?.title,
      imageUrl: item?.imageUrl,
      affordability: item?.affordability,
      duration: item?.duration,
      complexity: item?.complexity,
    };

    return <MealItem {...mealItemProps} />;
  };

  return <MealsList items={displayedMeals} />;
};

export default MealsOverView;
