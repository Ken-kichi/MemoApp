import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";

export default function SignUpScreen(props) {
  const { navigation } = props;
  return (
    <View style={StyleSheet.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <Button
          label="submit"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "MemoList" }]
            })
          }
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registed?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "LogIn" }]
              });
            }}
          >
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8"
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    marginBottom: 16
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467fd3"
  },
  footer: {
    flexDirection: "row"
  }
});
