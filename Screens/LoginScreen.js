import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import DividerWithText from "../Components/DividerWithText";
import CustomButtonWithIcon from "../Components/CustomButtonWithIcon";

const LoginScreen = () => {
  return (
    <LinearGradient
      style={styles.linearGradientStyle}
      colors={["#76181E", "#263b74ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0} // lazım olsa sonra 20–40 eləyib test edərsən
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.loginScreenContainer}>
            <Text style={styles.welcomeTextStyle}>Welcome,</Text>
            <Text style={styles.gladTextStyle}>Glad to see you!</Text>

            <View style={{ height: 30 }} />

            <CustomTextInput placeholder="Email Address" />
            <CustomTextInput placeholder="Password" isPasswordInput={true} />

            <View style={styles.forgotPasswordView}>
              <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }}>
                <Text style={{ color: "white", fontWeight: "600" }}>
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

            <CustomButton
              title="Login"
              textStyle={styles.loginButtonTextStyle}
              style={styles.loginButtonStyle}
              pressedOpacity={0.75}
            />

            <View style={{ height: 30 }} />

            <DividerWithText text="Or Login with" />

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 20,
              }}
            >
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
              Don't have an account?{" "}
              <Text
                style={{ color: "white" }}
                onPress={() => console.log("Signup")}
              >
                Sign up now!
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  linearGradientStyle: {
    width: "100%",
    flex: 1, // height: "100%" əvəzinə
    alignItems: "center",
  },
  keyboardAvoiding: {
    flex: 1,
    width: "100%",
  },
  // BÜTÜN scroll olunan content üçün stil
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",     // hər şeyi yenə ortalayır
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  loginScreenContainer: {
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
  loginButtonStyle: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonTextStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordView: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
  },
  footerText: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
