import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { AppStyles } from "../AppStyles";
import Signup from "./Signup";

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const moveSigup = () => {
    navigation.navigate(Signup);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail or phone number"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={styles.loginContainer}
        // onPress={() => onPressLogin()}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity
        style={styles.signupContainer}
        // onPress={() => onPressLogin()}
        onPress={moveSigup}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 30 }}
          size="large"
          animating={loading}
          color={AppStyles.color.tint}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  or: {
    color: "black",
    marginTop: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    alignItems: "center",
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  signupContainer: {
    alignItems: "center",
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 0,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    alignItems: "center",
    width: 192,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
  },
});

export default Login;
