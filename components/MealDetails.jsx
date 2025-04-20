import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      {duration && (
        <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      )}
      {complexity && (
        <Text style={[styles.detailItem, textStyle]}>
          {complexity?.toUpperCase()}
        </Text>
      )}
      {affordability && (
        <Text style={[styles.detailItem, textStyle]}>
          {affordability?.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
});
