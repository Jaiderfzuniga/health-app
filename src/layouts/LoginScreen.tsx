import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useEffect } from "react";

export default function LoginScreen() {
const navigation = useNavigation();

  useEffect(()=> {
    navigation.setOptions({ headerShown: false });
  },[navigation]);

    return (
        <View style={styles.container}>
         <Text style={styles.title}>Sing in </Text>

          <TextInput
          style={styles.input}
           placeholder="admin@gmail.com"
           />

          <TextInput
          style={styles.input}
               placeholder="****************"
               secureTextEntry />

               <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>
        </View>
        
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#d1f2eb"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20

  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#17202a"
  },

  button :{
    marginTop: 20,
    backgroundColor: "#2471a3",
    padding:10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  }
});