import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";

import Form from "./components/Form";

const { width, height } = Dimensions.get("window");
export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component={Form} hideNavBar initial />
        </Scene>
      </Router>
    );
  }
}
