import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2023年2月18日 18:30</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDetail}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <AntDesign name="close" size={16} color="#848484" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2023年2月18日 18:30</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDetail}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <AntDesign name="close" size={16} color="#848484" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2023年2月18日 18:30</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDetail}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <AntDesign name="close" size={16} color="#848484" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)"
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  momoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484"
  },
  memoDetail: {
    padding: 8
  }
});
