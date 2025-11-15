import React from "react";
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const CustomButtonWithIcon = ({onPress, title, style, textStyle, pressedOpacity, iconName, iconSize, iconColor}) => {

   return(
        <Pressable style = {({pressed}) => pressed ? [styles.iconBtn, style, {opacity: pressedOpacity}] : [styles.iconBtn, style]} onPress={onPress} >
            <FontAwesome name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
   )};


   export default CustomButtonWithIcon;


  const styles = StyleSheet.create({
       iconBtn: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
       }
   });
