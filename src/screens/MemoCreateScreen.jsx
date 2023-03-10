import React from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView sytle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value="testCode"
          multiline
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <CircleButton name="check" onPress={() => navigation.goBack()} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
});
