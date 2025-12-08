import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from "react-native";
type Props = {
    label: string;
    theme?: "primary" | "withPicture";
    onPress?: () => void
    textSize?: number
};

export default function Button({label, theme, onPress, textSize}: Props){
    if(theme === "primary"){
return (
    <View style={[
        styles.buttonContainer,
        {borderWidth: 1, borderColor: "#eae2c8ff", borderRadius: 18},

    ]}>
        <Pressable
            style={[styles.button, {backgroundColor: "#fff"}]}
            onPress = {onPress}
            >
    
                <Text style={[styles.buttonLabel, textSize ? {fontSize:textSize} : undefined]}>{label}</Text>
        </Pressable>
    </View>
);
    }
    if(theme === "withPicture"){
return (
    <View style={[
        styles.buttonContainer,
        {borderWidth: 1, borderColor: "#eae2c8ff", borderRadius: 18},

    ]}>
        <Pressable
            style={[styles.button, {backgroundColor: "#fff"}]}
            onPress = {onPress}
            >
                <FontAwesome
                name = "picture-o"
                size = {18}
                color = "#25292e"
                style = {styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, textSize ? {fontSize:textSize} : undefined]}>{label}</Text>
        </Pressable>
    </View>
);
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        width:200,
        height:30,
        marginHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
        padding:3,
    },
  button : {
      borderRadius: 10,
      width: "100%",
      height: "100%",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"row",
  },
  buttonIcon: {
    paddingRight:8,
  },
  buttonLabel: {
    color: "#003926ff",
    fontSize: 16,
  }
});