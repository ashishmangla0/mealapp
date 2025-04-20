import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CatgoriesScreen = ({ navigation }) => {
  const renderCatItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("MealsOvervies", {
        categoryId: itemData?.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData?.item.title}
        color={itemData?.item.color}
        onPress={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCatItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CatgoriesScreen;
