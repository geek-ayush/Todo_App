import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./style.js";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.headText}>todo</Text>
        </View>
      </View>
    );
  }
}
