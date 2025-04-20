import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
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
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
