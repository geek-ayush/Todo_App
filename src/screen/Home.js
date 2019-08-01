import React, { Fragment } from "react";
import Header from "../Component/Header/index";
import TodoScreen from "./TodoScreen/index";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "react-native-vector-icons/dist/FontAwesome";

const Home = ({ navigation }) => {
  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <Header />
        <TodoScreen style={{ flex: 1 }} />
      </View>
      <View>
        <Button title="next" onPress={() => navigation.navigate("Second")} />
      </View>
    </Fragment>
  );
};

export default Home;
