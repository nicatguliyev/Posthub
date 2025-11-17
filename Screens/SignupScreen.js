import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from "expo-linear-gradient";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import DividerWithText from "../Components/DividerWithText";
import CustomButtonWithIcon from "../Components/CustomButtonWithIcon";

const SignUpScreen = () => {

    return (
        <LinearGradient
            style={styles.linearGradientStyle}
            colors={["#76181E", "#263b74ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>

            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.container}
                enableOnAndroid={true}
                extraScrollHeight={50}
                keyboardShouldPersistTaps="handled"
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.formContainer}>
                    <Text style={styles.titleTextStyle}>Create Account</Text>
                    <Text style={styles.subtitleTextStyle}>to get started now!</Text>

                    <View style={{ height: 30 }} />

                    <CustomTextInput placeholder="Email Address" />
                    <CustomTextInput placeholder="Password" isPasswordInput={true} />
                    <CustomTextInput placeholder="Confirm Password" isPasswordInput={true} />

                    <CustomButton
                        title="Sign Up"
                        textStyle={styles.signUpButtonTextStyle}
                        style={styles.signUpButtonStyle}
                        pressedOpacity={0.75}
                    />
                    <View style={{ height: 30 }} />
                    <DividerWithText text="Or Sign up with" />

                    <View style={styles.socialButtonsContainer}>
                        <CustomButtonWithIcon
                            style={{ flex: 1, marginRight: 10 }}
                            iconName="facebook"
                            iconSize={25}
                            iconColor="blue"
                            pressedOpacity={0.75}
                        />
                        <CustomButtonWithIcon
                            style={{ flex: 1, marginLeft: 10 }}
                            iconName="google"
                            iconSize={25}
                            iconColor="red"
                            pressedOpacity={0.75}
                        />
                    </View>

                    <Text style={styles.footerText}>
                        {" "}
                        <Text
                            style={styles.footerLink}
                            onPress={() => console.log("Navigate to Login")}
                        >
                            Login now!
                        </Text>
                    </Text>

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
    },

    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        minHeight: "100%",
    },

    formContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },

    titleTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        letterSpacing: 2,
        textAlign: "center",
    },
    subtitleTextStyle: {
        fontSize: 20,
        color: "white",
        letterSpacing: 3,
        fontWeight: "300",
        marginTop: 3,
        textAlign: "center",
    },
    signUpButtonStyle: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    signUpButtonTextStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    socialButtonsContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
    },
    footerText: {
        marginTop: 40,
        fontSize: 16,
        color: "#e0e0e0",
        textAlign: "center",
    },
    footerLink: {
        color: "white",
        fontWeight: "bold",
    },
});

