import React, { Component } from "react";
import { View, Text, Button } from "react-native";
// import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import RoundCheckbox from "rn-round-checkbox";

import styles from "./style.js";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: this.props.checked,
      index: this.props.number
    };
  }

  toggle = () => {
    this.setState(partialState => ({
      isCompleted: !partialState.isCompleted,
      index: partialState.index
    }));
    this.props.toggleFunction(this.state.index, this.state.isCompleted);
  };

  remove = () => {
    this.props.removeFunction(this.state.index);
    this.setState(partialState => ({
      isCompleted: partialState.isCompleted,
      index: partialState.index
    }));
  };

  render() {
    var deco = "none";
    var fontW = "normal";
    var col = "#555555";
    if (this.props.checked) {
      deco = "line-through";
      col = "#A9A9B0";
      fontW = "100";
    }
    return (
      <View style={styles.todoItem}>
        <RoundCheckbox
          size={22}
          title=" "
          checked={this.props.checked}
          onValueChange={this.toggle}
          backgroundColor="#decacb"
        />
        <Text
          style={{
            fontSize: 20,
            paddingLeft: 10,
            fontWeight: fontW,
            flex: 1,
            color: col,
            textDecorationLine: deco
          }}
        >
          {this.props.text}
        </Text>

        <Icon.Button
          name="trash"
          color="#A9a9b0"
          backgroundColor="transparent"
          onPress={this.remove}
          style={styles.addButton}
          fontSize="30"
        />
      </View>
    );
  }
}
