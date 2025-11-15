import React from "react";
import {View, Text, Pressable} from 'react-native';

const CustomButton = ({onPress, title, style, textStyle, pressedOpacity}) => {

   return(
     <Pressable style = {({pressed}) => [style, pressed && {opacity: pressedOpacity}]} onPress={onPress}>
        <Text style = {textStyle}>{title}</Text>
     </Pressable>
   );

}

export default CustomButton;