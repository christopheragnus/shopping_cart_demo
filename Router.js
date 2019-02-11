import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./containers/HomeScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import BooksScreen from "./containers/BooksScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import CartScreen from "./containers/CartScreen";

const AppStackNavigator = createStackNavigator(
  {
    Cart: CartScreen,
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen
  },
  {
    navigationOptions: {
      title: "Shopping App",
      headerRight: <ShoppingCartIcon />
    }
  }
);

export default createAppContainer(AppStackNavigator);
