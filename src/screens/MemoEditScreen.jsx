import React from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoEditScreen() {
  return (
    <KeyboardSafeView sytle={styles.container} behavior="hight">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          Alert.alert("Pressed!");
        }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  input: {
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 32
  }
});
