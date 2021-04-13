import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";

export default function App() {
  return (
    <Loading />
  );
}

{/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "red",
    fontSize: 25
  }
}); */}
