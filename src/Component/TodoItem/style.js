import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    marginLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: "center"
  },
  todoItemText: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "normal",
    flex: 1,
    color: "#555555"
  }
});

export default styles;
