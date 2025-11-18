import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from "../Components/CustomButton";

const WelcomeScreen = ({ navigation }) => {

    return (
        <LinearGradient style={styles.linearGradientStyle}
            colors={['#76181E', '#263b74ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>

            <View style={styles.welcomeScreenContainer}>
                <Image
                    source={require('../assets/images/cover.png')}
                    style={{ width: 200, height: 100 }}
                />
                <CustomButton title="Login"
                    textStyle={styles.loginButtonTextStyle}
                    style={styles.loginButtonStyle}
                    pressedOpacity={0.75}
                    onPress={() => navigation.replace('Login')} />
                <CustomButton title="Sign Up"
                    textStyle={styles.signupButtonTextStyle}
                    style={styles.signupButtonStyle}
                    pressedOpacity={0.25}
                    onPress={() => navigation.replace('SignUp')} />
            </View>

            <Pressable style={({ pressed }) => [styles.guestBtn, pressed && styles.guestBtnPressed]}>
                <Text style={styles.guestBtnText}>
                    Continue as Guest
                </Text>
            </Pressable>

        </LinearGradient>



    );

}
export default WelcomeScreen;

const styles = StyleSheet.create({
    linearGradientStyle: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        width: "100%",
    },
    loginButtonStyle: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginTop: 60,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    loginButtonTextStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    signupButtonStyle: {
        backgroundColor: "transparent",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
    },
    signupButtonTextStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    guestBtnText: {
        fontSize: 18,
        color: "white",
        fontWeight: "500",
        letterSpacing: 2
    },
    guestBtn: {
        margin: 70
    },
    guestBtnPressed: {
        opacity: 0.25
    }
}
)