import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class Products extends Component {
  // onPress is linked to ElectronicsScreen onPress
  renderProducts = products => {
    console.log(products);
    return products.map((item, index) => {
      console.log(item);
      return (
        <View key={index} style={{ padding: 20 }}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.name + " - " + item.price}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}

export default Products;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};
