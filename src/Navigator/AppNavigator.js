import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screen/Home";
import Second from "../screen/Second";
import React, { Component } from "react";

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Second: {
      screen: Second
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(Navigator);
//export default AppContainer;

export default class AppNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
