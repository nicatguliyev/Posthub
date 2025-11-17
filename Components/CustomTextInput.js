import React from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const CustomTextInput = ({ placeholder, isPasswordInput }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(isPasswordInput ? false : true);

    return (
        <View style = {{width: "100%",}}>
            <TextInput placeholder={placeholder}
                style={styles.inputStyle}
                placeholderTextColor="#a0a0a0ff"
                secureTextEntry={!isPasswordVisible}>
                
          </TextInput>
          {
            isPasswordInput && (
                <Pressable style={styles.iconStyle} onPress = {() => {setIsPasswordVisible(!isPasswordVisible)}}>
                    {
                        isPasswordVisible ? <FontAwesome name="eye" size={20} color="black"  /> :
                          <FontAwesome name="eye-slash" size={20} color="black"  />
                    }
                 
                </Pressable>
                
            )
          }
          
        </View>

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
    }, 
    iconStyle: {
        position: "absolute",
        right: 0,
        top: 10,
        backgroundColor: "#ffffff3e",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});