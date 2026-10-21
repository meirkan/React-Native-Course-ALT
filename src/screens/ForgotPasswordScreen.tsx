import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function ForgotPasswordScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage("login")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Восстановление</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Восстановление пароля</Text>
        <Text style={styles.subtitle}>Введите свой номер телефона, чтобы восстановить пароль</Text>

        <TextInput style={styles.input} placeholder="+7 7766241751" />

        <TouchableOpacity style={styles.button} onPress={() => setPage("verify")}>
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
  input: { backgroundColor: "#f8f5fa", padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: "#eee" },
  button: { backgroundColor: "#a800d8", padding: 16, borderRadius: 10, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});