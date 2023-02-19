import React from "react";
import { View, StyleSheet } from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import AppBar from "../components/AppBar";

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8"
  }
});
