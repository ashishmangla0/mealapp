import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
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
  return (
    <View style={styles.container}>
      <FlatList renderItem={renderMealItem} data={items} keyExtractor={(item) => item.id} />
    </View>
  );
};
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
