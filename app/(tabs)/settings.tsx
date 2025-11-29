import Button from "@/components/button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native"; // Import Image

const mascot = require("../../assets/images/reading.png")

export default function Settings() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your profile...</Text>
      
      <Image 
        source={selectedImage ? { uri: selectedImage } : mascot}
        style={styles.image}
        resizeMode="contain" 
      />
      
      <Button
        onPress={pickImageAsync} 
        label="Change your profile picture?" 
        theme="primary" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAE7E2",
  },
  text: {
    color: "#27472D",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});