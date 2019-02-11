import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./containers/HomeScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import BooksScreen from "./containers/BooksScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import CartScreen from "./containers/CartScreen";

// import Router from "./Router";

class ShoppingCart extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Electronics: ElectronicsScreen,
      Books: BooksScreen,
      Cart: CartScreen
    },
    {
      defaultNavigationOptions: {
        title: "Shopping App",
        headerRight: <ShoppingCartIcon />
      }
    }
  )
);

export default ShoppingCart;
