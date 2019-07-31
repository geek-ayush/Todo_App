import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 150,
    justifyContent: "space-between"
  },
  headerText: {
    alignSelf: "center"
  },
  infoIcon: {
    alignSelf: "flex-end"
  },
  content: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center"
  },
  headText: {
    fontSize: 100,
    fontWeight: "100",
    color: "#decacb"
  }
});

export default styles;
