import Button from "@/components/button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";
const mascot = require("../../assets/images/reading.png")

export default function index() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <ImageViewer imgSource = {mascot}/>
        <Text style={styles.text}>"The best time to start was 20 years ago. The second best time is now."{"\n"}Academic Planner is here to help you towards your goals!</Text>
        </View>
      
      
      <View style = {styles.box}>
        <Button label = "Ask me anything!"/>
        <Button label = "Check your progress!"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#EAE7E2",
    margin: 18,
    flexDirection: "column",
  },
  box: {
    flex:1,
    flexDirection: "row",
    justifyContent: "flex-start",
    width:500,
    height:200,
    color: "#eef4fb",
  },
  text: {
    color: "#27472D",
  },
  
 
})