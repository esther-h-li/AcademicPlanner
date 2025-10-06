import { StyleSheet, Text, View } from "react-native";

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your friends are online!</Text>
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