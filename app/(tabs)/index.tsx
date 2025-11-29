import Button from "@/components/button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
const mascot = require("../../assets/images/reading.png")
const progress = 0.63;
export default function index() {

  const size = 200;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2* Math.PI * radius;
  const strokeDashoffset = circumference - (progress * circumference)
  

  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <ImageViewer imgSource = {mascot}/>
        <View style={styles.top_container}>
          <Text style={styles.text}>"The best time to start was 20 years ago. The second best time is now."{"\n"}Academic Planner is here to help you towards your goals!</Text>
          <Button label = "Ask me anything!" theme = "primary"/>
        </View>

        </View>
      
      
      <View style = {styles.box}>
        <View style = {styles.progress}>
          <View style = {{transform: [{scale: 0.9}] }}>
            <Text style = {{textAlign: "center", fontSize: 20, color: "#27472D"}}>{progress * 100}% done!</Text>
            <Button label = "Check your progress!" theme = "primary"/>
            
          </View>
        </View>
        <Svg width = {size} height = {size} style = {styles.svg}>
             <Circle
              cx = {size/2}
              cy = {size/2}
              r = {radius}
              stroke = "#226666"
              strokeWidth = {strokeWidth}
              fill = "none"
              strokeDasharray = {circumference}
              strokeDashoffset = {strokeDashoffset}
              strokeLinecap = "round"
              transform = {`rotate(-90 ${size /2} ${size/2})`}
            />
            </Svg>
           
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  top_container: {
    flex: 2
  },
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
  progress: {
    width: 200,
    height: 200,
    backgroundColor: "#C3F0FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: 'relative',
  },
  svg: {
    position: 'absolute',

  },
 
})