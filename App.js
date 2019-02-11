import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShoppingCart from "./ShoppingCart";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}
