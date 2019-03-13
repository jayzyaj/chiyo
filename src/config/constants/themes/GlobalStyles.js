import { StyleSheet } from "react-native";
import COLOR from "./Colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.LIGHT_GRAY,
    padding: 16,
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 100,
  },
});

export default Styles;
