import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const handleMealItem = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={style.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={handleMealItem}
      >
        <View style={style.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const style = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowOpacity: 0.25,
    shadowColor: "black",
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
});
