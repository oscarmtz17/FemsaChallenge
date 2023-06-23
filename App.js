import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [favorite, setFavorite] = useState("");

  const saveHandler = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("age", age);
      await AsyncStorage.setItem("favorite", favorite);
    } catch (error) {
      console.log(error);
    }
  };
  const printHandler = async () => {
    const name = await AsyncStorage.getItem("name");
    const age = await AsyncStorage.getItem("age");
    const favorite = await AsyncStorage.getItem("favorite");

    console.log(
      `Hola mi nombre es ${name}, tengo ${age} años y mi lenguaje de programación favorito es ${favorite}`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.text}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.text}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.text}
        placeholder="Favorite Language"
        onChangeText={(text) => setFavorite(text)}
      />
      <Button title="Save" onPress={saveHandler} />
      <View style={styles.buttonView} />
      <Button title="Print" onPress={printHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 16,
    marginBottom: 16,
  },
  text: {
    borderColor: "grey",
    borderWidth: 1,
    height: 40,
    marginBottom: 5,
    padding: 3,
  },
  buttonView: {
    marginBottom: 5,
  },
});
