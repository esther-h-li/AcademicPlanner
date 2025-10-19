import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from "react-native";
type Props = {
    label: string;
    theme?: "primary";
    onPress?: () => void
};

export default function Button({label, theme, onPress}: Props){
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
                <FontAwesome
                name = "picture-o"
                size = {18}
                color = "#25292e"
                style = {styles.buttonIcon}
                />
                <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
);
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        width:320,
        height:60,
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