import React, { Fragment, Component } from "react";
import { View, Button, Text } from "react-native";

export default class One extends React.Component {
  render() {
    alert("ajshdbjh");
    return (
      <Fragment>
        <View style={{ flex: 1 }}>
          <Text>Ayushh</Text>
          <Button
            title="Add some friends"
            // onPress={() => this.props.navigation.navigate("Second")}
          />
        </View>
      </Fragment>
    );
  }
}
