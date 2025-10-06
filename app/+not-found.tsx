import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options = {{ title: 'Oops! Not Found'}} />
    <View style={styles.container}>
      <Text style={styles.text}>Page not found!</Text>
      <Link href="/first" style = {styles.button}>
      Go back to Home Screen!
      </Link>
    </View>
    </>
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
  },
})