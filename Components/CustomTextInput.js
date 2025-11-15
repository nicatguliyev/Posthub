import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({placeholder}) => {
    return(
        <TextInput placeholder={placeholder} 
        style = {styles.inputStyle} 
        placeholderTextColor="#a0a0a0ff">

        </TextInput>
    );
}

export default CustomTextInput;

const styles = StyleSheet.create({
    inputStyle: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#ffffff3e",
        marginVertical: 10,
        color: "white",
        fontSize: 16,
        placeholderTextColor: "white",
        borderColor: "white",
        borderWidth: 0.5
    }
});