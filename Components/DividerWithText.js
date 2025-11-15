import React from "react";  
import {View, Text, StyleSheet} from 'react-native';

const DividerWithText = ({text}) => {

    return(
        <View style = {styles.container}>
          <View style = {styles.line}></View>
          <Text style = {styles.textStyle}>{text}</Text>
          <View style = {styles.line}></View>
        </View>
    );
};

export default DividerWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

  },
    line: {
        height: 1,
        backgroundColor: "grey",
        flex: 1,
    },
    textStyle: {
        fontSize: 14,
        color: "grey",
        marginHorizontal: 15,
        fontWeight: "bold",
    }

})