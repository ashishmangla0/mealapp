import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style?.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const style = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign:'center'
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 24,
  },
});
