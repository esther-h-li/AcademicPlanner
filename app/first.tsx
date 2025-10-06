import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function First() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Academic Planner!</Text>
    <Link href="/second" style = {styles.button}>
            Next
          </Link>
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