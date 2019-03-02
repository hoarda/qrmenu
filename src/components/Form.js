import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Image } from "react-native";
import { Router, Scene, Drawer } from "react-native-router-flux";
import Button from "../commons/Button";
import { strings } from "../lang/Strings";

const { width, height } = Dimensions.get("window");
class Form extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../img/bg.png")}
        style={{
          width,
          height,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image source={require("../img/logo.png")} />

        <Text style={styles.nm}>eMenu</Text>

        <View style={styles.section}>
          <Image source={require("../img/scm.png")} />
        </View>

        <Button Text={strings.callthewaiter} />
      </ImageBackground>
    );
  }
}
const styles = {
  section: {
    marginTop: 20,
    borderRadius: 15,
    width: width * 0.62,
    height: height * 0.32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  nm: {
    marginTop: 40,
    fontSize: 36,
    fontWeight: "bold"
  }
};

export default Form;
