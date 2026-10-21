import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function HomeScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>☰</Text>
        <Text style={styles.headerTitle}>React Native Course ALT</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Привет, meirkan! 👋</Text>
        <Text style={styles.subtitle}>Выберите курс для обучения</Text>

        <TouchableOpacity style={styles.card} onPress={() => setPage("course")}>
          <Text style={styles.cardTitle}>📱 React Native</Text>
          <Text style={styles.cardText}>Создание мобильных приложений</Text>
          <Text style={styles.more}>Открыть курс →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>💻 JavaScript</Text>
          <Text style={styles.cardText}>Основы программирования</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => setPage("home")}>
          <Text style={styles.active}>Главная</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("profile")}>
          <Text style={styles.bottomText}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { height: 75, backgroundColor: "#292929", flexDirection: "row", alignItems: "center", paddingHorizontal: 20 },
  back: { color: "#fff", fontSize: 28, marginRight: 25 },
  headerTitle: { color: "#fff", fontSize: 20 },
  content: { padding: 25 },
  title: { fontSize: 25, fontWeight: "bold", color: "#222", marginTop: 15 },
  subtitle: { color: "#999", fontSize: 15, marginTop: 8, marginBottom: 25 },
  card: { backgroundColor: "#f8f5fa", padding: 20, borderRadius: 15, marginBottom: 15 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#222" },
  cardText: { color: "#888", marginTop: 8 },
  more: { color: "#a800d8", marginTop: 15, fontWeight: "bold" },
  bottom: { position: "absolute", bottom: 0, width: "100%", height: 65, borderTopWidth: 1, borderTopColor: "#eee", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#fff" },
  bottomText: { color: "#777", fontSize: 15 },
  active: { color: "#a800d8", fontWeight: "bold", fontSize: 15 }
});