import React, { Component } from "react";
import Head from "../Head/index";
import TodoItem from "../TodoItem/index";
import BottomNav from "../BottomNav/index";
import { Text, View, ScrollView } from "react-native";

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filter: "all"
    };
  }
  appendItem = (caption, itemState) => {
    this.state.data.push({
      itemText: caption,
      state: false
    });

    this.setState(previousState => ({
      data: previousState.data,
      filter: previousState.filter
    }));
  };

  toggleState = index => {
    this.state.data[index].state = !this.state.data[index].state;
    this.setState(previousState => ({
      data: previousState.data,
      filter: previousState.filter
    }));
  };

  removeItem = index => {
    this.state.data.splice(index, 1);
    this.setState(previousState => ({
      data: previousState.data,
      filter: previousState.filter
    }));
  };

  completeFilter = () => {
    this.setState(previousState => ({
      data: previousState.data,
      filter: "completed"
    }));
  };

  incompleteFilter = () => {
    this.setState(previousState => ({
      data: previousState.data,
      filter: "incompleted"
    }));
  };

  clearFilter = () => {
    this.setState(previousState => ({
      data: previousState.data,
      filter: "all"
    }));
  };

  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <Head appendItem={this.appendItem} />
        <ScrollView style={{ flex: 1, marginBottom: 50 }}>
          {this.state.data.map((item, index) => {
            if (
              this.state.filter == "all" ||
              (this.state.filter == "incompleted" &&
                !this.state.data[index].state) ||
              (this.state.filter == "completed" && this.state.data[index].state)
            ) {
              console.log(index);
              return (
                <TodoItem
                  key={index}
                  number={index}
                  checked={item.state}
                  text={item.itemText}
                  toggleFunction={this.toggleState}
                  removeFunction={this.removeItem}
                />
              );
            }
          })}
        </ScrollView>
        <BottomNav
          style={{ flex: 2 }}
          completedFilter={this.completeFilter}
          incompletedFilter={this.incompleteFilter}
          clearFilter={this.clearFilter}
        />
      </View>
    );
  }
}
