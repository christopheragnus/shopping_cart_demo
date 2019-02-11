import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Navigation Buttons</Text>
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate("Electronics")}
        />
        <Button
          title="Books"
          onPress={() => this.props.navigation.navigate("Books")}
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  }
};
