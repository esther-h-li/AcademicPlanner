import Button from "@/components/button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const mascot = require("../../assets/images/reading.png")

export default function Settings() {
  const [selectedImage, setSelectedImage] = useState<string | undefined> (
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      console.log(result);
    }
    else{
      alert("You did not select any image.");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your profile...</Text>
      <ImageViewer imgSource = {selectedImage || mascot}/>
      <Button
      onPress = {pickImageAsync} 
      label = "Change your profile picture?" 
      theme = "primary" 
      />
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
})