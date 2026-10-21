import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function CourseScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.simpleHeader}>
        <TouchableOpacity onPress={() => setPage("home")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Курс</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>React Native 📱</Text>
        <Text style={styles.subtitle}>Изучайте создание мобильных приложений</Text>

        <View style={styles.lesson}>
          <Text style={styles.lessonTitle}>Урок 1</Text>
          <Text style={styles.lessonText}>Введение в React Native</Text>
        </View>

        <View style={styles.lesson}>
          <Text style={styles.lessonTitle}>Урок 2</Text>
          <Text style={styles.lessonText}>Компоненты и Props</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setPage("home")}>
          <Text style={styles.buttonText}>Начать обучение</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  simpleHeader: { height: 75, backgroundColor: "#292929", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, gap: 20 },
  arrow: { color: "#fff", fontSize: 35 },
  headerTitle: { color: "#fff", fontSize: 20 },
  content: { padding: 25 },
  title: { fontSize: 25, fontWeight: "bold", color: "#222", marginTop: 15 },
  subtitle: { color: "#999", fontSize: 15, marginTop: 8, marginBottom: 25 },
  lesson: { backgroundColor: "#f8f5fa", padding: 18, borderRadius: 12, marginBottom: 12 },
  lessonTitle: { color: "#a800d8", fontWeight: "bold" },
  lessonText: { fontSize: 16, marginTop: 5 },
  button: { backgroundColor: "#a800d8", padding: 16, borderRadius: 10, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});