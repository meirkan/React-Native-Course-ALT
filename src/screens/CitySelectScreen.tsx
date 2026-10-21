import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function CitySelectScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage("register")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Город</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Выберите город</Text>
        <Text style={styles.subtitle}>Указанный город будет использоваться как основной.</Text>

        <View style={styles.cityBox}>
          <Text style={styles.cityText}>Алматы</Text>
        </View>
        <View style={styles.cityBox}>
          <Text style={styles.cityText}>Астана</Text>
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
  cityBox: { backgroundColor: "#f8f5fa", padding: 16, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: "#eee" },
  cityText: { fontSize: 16, color: "#333" },
  button: { backgroundColor: "#a800d8", padding: 16, borderRadius: 10, alignItems: "center", marginTop: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});