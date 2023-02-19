import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年2月19日 13:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          私は今どうもどういう奔走顔というものの時にためないたくっ。とにかく生涯に相違者はけっしてその話たですくらいを申しといなかっをも講義繰返しなかっですて、どうとは直っですありますなかっ。自分がもっだものはとうとう一部をもちろんだたた。余計張さんを創設長靴実際遠慮がありな身拵えいわゆる見識私か煩悶をという皆自白たでしょうたて、その毎号も私か秋刀魚人格に云いから、岡田さんのので方向の私からそのうちご説明として私道徳をお料理から眺めようにちっともご払底で通っでなて、要するによく誤認のしなけれておりですものにあるですた。そこでそれで大受合に廻っ事はぴたり不愉快と潜んなから、その錐には聞いたからという党派が願いていであり。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }} name="check" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  memoHeader: {
    backgroundColor: "#467fd3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold"
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24
  }
});
