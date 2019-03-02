import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

class Button extends Component {
  render() {
    return (
      <View
        style={{
          width: width * 0.71,
          height: height * 0.07,
          backgroundColor: "red",
          marginTop: 60,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 21,
            fontWeight: "400"
          }}
        >
          {this.props.Text}
        </Text>
      </View>
    );
  }
}

export default Button;
