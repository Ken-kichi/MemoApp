import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView sytle={styles.container} behavior="hight">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput
          value="買い物リスト"
          multiline
          numberOfLines={40}
          maxLength={40}
          style={styles.input}
        />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
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
    lineHeight: 24
  }
});
