import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  StatusBar,
} from "react-native";

import CatgoriesScreen from "./screens/CatgoriesScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverView from "./screens/MealsOverview";
import MealDeatilScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import Ionicons from '@expo/vector-icons/Ionicons';
import FavoritesContextProvider from "./store/context/favorites-context";


const Stack = createNativeStackNavigator();

const Drawer =  createDrawerNavigator();

const DrawerNavigator = () =>{
  return(
    <Drawer.Navigator
    screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      screenContainerStyle:{
        backgroundColor:'#3f2f25'
      }
  
    }}>
    <Drawer.Screen  name="Categories" component={CatgoriesScreen} options={{
      title:'All Categories',
      drawerIcon: ({color,size}) => <Ionicons name="list" color={color} size={size}/>
    }}/>
    <Drawer.Screen  name="Favorites" component={FavoritesScreen} options={
      {
        drawerIcon: ({color,size}) => <Ionicons name="star" color={color} size={size}/>
      }
    }/>

  </Drawer.Navigator>
  )}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCatgories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCatgories"
            component={ DrawerNavigator }
            options={{ title: "All Categories", headerShown:false}}
          />
          <Stack.Screen
            name="MealsOvervies"
            component={MealsOverView}
            // options={({ route }) => ({
            //   title: route.params.categoryId,
            // })}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDeatilScreen}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    
    </>
  );
}
