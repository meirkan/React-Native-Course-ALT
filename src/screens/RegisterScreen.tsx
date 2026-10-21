import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function RegisterScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage("login")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Регистрация</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить</Text>

        <TextInput style={styles.input} placeholder="Ваше имя" />
        <TextInput style={styles.input} placeholder="Номер телефона" />
        <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => setPage("city")}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("login")}>
          <Text style={styles.footerText}>Уже есть аккаунт? <Text style={styles.link}>Войти</Text></Text>
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
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footerText: { textAlign: "center", marginTop: 20, color: "#777" },
  link: { color: "#a800d8", fontWeight: "bold" }
});