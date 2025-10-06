import { StyleSheet, Text, View } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your schedule for today:</Text>
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