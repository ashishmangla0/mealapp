import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data?.map((dataPoint) => (
    <View key={dataPoint} style={style.listItem}>
      <Text style={style.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;


const style = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:8,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
})