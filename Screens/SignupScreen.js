import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from "expo-linear-gradient";
import CustomTextInput from "../Components/CustomTextInput";




const SignUpScreen = () => {

    return (


        <LinearGradient
            style={styles.linearGradientStyle}
            colors={["#76181E", "#263b74ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>


            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                enableOnAndroid={true}
                extraScrollHeight={0}>

                <View style={styles.signUpContainer}>
                    <Text style={styles.welcomeTextStyle}>Create Account</Text>
                    <Text style={styles.gladTextStyle}>to get started now!</Text>

                    <CustomTextInput placeholder="Email Address" />
                    <CustomTextInput placeholder="Email Address" />
                    <CustomTextInput placeholder="Email Address" />

                    <CustomTextInput placeholder="Password" isPasswordInput={true} />


                </View>

            </KeyboardAwareScrollView>

        </LinearGradient >
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({

    linearGradientStyle: {
        width: "100%",
        flex: 1,
        alignItems: "center",
    },

    container: {
        flexGrow: 1,
        width: "100%",
        padding: 20,
        justifyContent: 'center',
    },

    signUpContainer: {
        width: "100%",
        alignItems: "center",
    },

    welcomeTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        letterSpacing: 2,
    },
    gladTextStyle: {
        fontSize: 20,
        color: "white",
        letterSpacing: 3,
        fontWeight: "300",
        marginTop: 3,
    },
});

