import React, { Component } from "react";
import { View, TextInput, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import styles from "./style.js";

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.logData = () => {
      this.props.appendItem(this.state.text, false);
      this.state.text = "";
    };
  }

  render() {
    return (
      <View style={styles.cma}>
        <View style={styles.addTodo}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            onSubmitEditing={this.logData}
            color="#808088"
            style={styles.textadd}
            blurOnSubmit={false}
            placeholder="Add a TODO task"
          />
        </View>
        <View>
          <Icon.Button
            name="sort-down"
            color="#A9a9b0"
            backgroundColor="transparent"
            onPress={this.logData}
            style={styles.addButton}
          />
        </View>
      </View>
    );
  }
}
