import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, TextInput, View } from "react-native";

const logo = require("../data/images/logo.png");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style = {styles.container}>
      <Image style = {styles.logo} source = {logo} />
      <TextInput
        style = {styles.input}
        value = {email}
        onChangeText = {setEmail}
        placeholder = "Email"
        placeholderTextColor = "#888"
        autoComplete = "email"
      />
      <TextInput
        style = {styles.input}
        value = {pass}
        onChangeText = {setPass}
        placeholder = "Password"
        placeholderTextColor = "#888"
        secureTextEntry = {true}
      />
      {(email && pass) ? 
      <TouchableOpacity
        style = {styles.clickableLogin}
        activeOpacity = {0.5}
        onPress = {null}
      >
        <Text style = {styles.loginText}>
          Log in
        </Text>
      </TouchableOpacity>
      :
      <View style = {styles.unclickableLogin} >
        <Text style = {styles.loginText}>
          Log in
        </Text>
      </View>}
      <View style = {styles.divider}>
        <View style = {styles.dividerLine} />
        <Text style = {styles.dividerText}>
          or
        </Text>
        <View style={styles.dividerLine} />
      </View>
      <View style = {styles.divider}>
        <Text style = {styles.footerText} onPress = {() => {}}>
          Sign Up
        </Text>
        <View style = {styles.footerDivider} />
        <Text style = {styles.footerText} onPress = {() => {}}>
          Forgot Password?
        </Text>
      </View>
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    margin: 40,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    width: "95%",
    margin: 5,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: (5, 5, 5),
    borderColor: (20, 20, 20),
  },
  clickableLogin: {
    height: 40,
    width: "95%",
    margin: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#5454ff",
    alignItems: "center",
  },
  unclickableLogin: {
    height: 40,
    width: "95%",
    margin: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#5454ff",
    alignItems: "center",
    opacity: 0.5,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgrey',
  },
  dividerText: {
    textAlign: 'center',
    paddingHorizontal: 8,
    color: "lightgrey",
  },
  footerText: {
    fontSize: 13,
    textAlign: 'center',
    paddingHorizontal: 15,
    color: "blue",
  },
  footerDivider: {
    backgroundColor: "lightgrey",
    width: 1,
    height: 20,
  },
});
