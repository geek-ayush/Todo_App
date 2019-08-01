import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cma: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#decacb",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 0,
    alignContent: "center"
  },
  addTodo: {
    flex: 1
  },
  textadd: {
    flex: 1,
    height: 50,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "200"
  },
  addButton: {
    height: 50,
    marginTop: -5
  }
});

export default styles;
