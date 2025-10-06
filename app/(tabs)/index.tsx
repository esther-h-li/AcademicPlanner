import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Academic planner is...!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#EAE7E2",
  },
  text: {
    color: "#27472D",
  },
  button : {
      fontSize: 10,
      textDecorationLine: "underline",
      color: "#317873",
  }
})