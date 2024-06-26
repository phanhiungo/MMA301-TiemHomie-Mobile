import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen() {

  const [click, setClick] = useState(false);
  const { phonenumber, setPhonenumber } = useState("");
  const { password, setPassword } = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo.png')}
        resizeMode='contain'
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='Enter phone number' value={phonenumber} onChangeText={setPhonenumber} autoCorrect={false} keyboardType='number-pad'
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='Enter password' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
          autoCapitalize='none' />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch value={click} onValueChange={setClick} trackColor={{ true: "#A2D2FF", false: "gray" }} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <MaterialCommunityIcons name="facebook" size={40} color={'blue'} />
        <MaterialCommunityIcons name="google" size={40} />
        {/* <Image
          style={styles.icon}
          source={require('../assets/google-icon.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/google-icon.png')}
        /> */}
      </View>

      <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#CDB4DB"
  },
  image: {
    height: 160,
    width: 170
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "black"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#FFC8DD",
    borderWidth: 2,
    borderRadius: 7
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  rememberText: {
    fontSize: 13
  },
  forgetText: {
    fontSize: 11,
    color: "black"
  },
  button: {
    backgroundColor: "#A2D2FF",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "red",
    fontSize: 13
  }
})