import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function VerifyCodeScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage("forgot")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Подтверждение</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Подтвердить номер</Text>
        <Text style={styles.subtitle}>Мы отправили код на номер +7 7766241751</Text>

        <View style={styles.codeContainer}>
          <TextInput style={styles.codeInput} maxLength={1} />
          <TextInput style={styles.codeInput} maxLength={1} />
          <TextInput style={styles.codeInput} maxLength={1} />
          <TextInput style={styles.codeInput} maxLength={1} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setPage("home")}>
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { height: 75, backgroundColor: "#292929", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, gap: 20 },
  arrow: { color: "#fff", fontSize: 35 },
  headerTitle: { color: "#fff", fontSize: 18 },
  content: { padding: 25, marginTop: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#222" },
  subtitle: { color: "#888", fontSize: 14, marginTop: 5, marginBottom: 25 },
  codeContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  codeInput: { width: 60, height: 60, backgroundColor: "#f8f5fa", borderRadius: 10, textAlign: "center", fontSize: 22, borderWidth: 1, borderColor: "#eee" },
  button: { backgroundColor: "#a800d8", padding: 16, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});