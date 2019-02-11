import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

//withNavigation is a higher order component which
//passes the navigation prop into a wrapped component
import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

const ShoppingCartIcon = props => {
  return (
    <TouchableOpacity
      style={{ padding: 5 }}
      onPress={() => props.navigation.navigate("Cart")}
    >
      <View
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: "rgba(211, 211, 211, 0.8)",
          right: 15,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {props.cartItems.length}
        </Text>
      </View>

      <Icon name="ios-cart" size={35} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state
  };
};

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));
