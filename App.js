import React, { Fragment } from "react";
import Header from "./Component/Header/index";
import TodoScreen from "./Component/TodoScreen/index";
import { SafeAreaView, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <Header />
        <TodoScreen style={{ flex: 1 }} />
      </View>
    </Fragment>
  );
};

export default App;
