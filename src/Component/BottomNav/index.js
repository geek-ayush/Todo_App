import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import styles from "./style.js";

export default class BottomNav extends Component {
  render() {
    return (
      <View style={styles.contaner}>
        <Icon.Button
          name="check"
          color="#A9a9b0"
          backgroundColor="transparent"
          onPress={this.props.completedFilter}
          style={styles.addButton}
        />
        <Icon.Button
          name="times"
          color="#A9a9b0"
          backgroundColor="transparent"
          onPress={this.props.incompletedFilter}
          style={styles.addButton}
        />
        <Icon.Button
          name="ban"
          color="#A9a9b0"
          backgroundColor="transparent"
          onPress={this.props.clearFilter}
          style={styles.addButton}
        />
      </View>
    );
  }
}
