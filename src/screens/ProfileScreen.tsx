import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function ProfileScreen({ setPage }: { setPage: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.simpleHeader}>
        <TouchableOpacity onPress={() => setPage("home")}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Профиль</Text>
      </View>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Р</Text>
        </View>

        <Text style={styles.name}>meirkan</Text>
        <Text style={styles.phone}>+7 7766241751</Text>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Мой курс</Text>
          <Text style={styles.infoText}>React Native</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setPage("login")}>
          <Text style={styles.buttonText}>Выйти из аккаунта</Text>
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
  profile: { alignItems: "center", padding: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#a800d8", justifyContent: "center", alignItems: "center", marginTop: 20 },
  avatarText: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  name: { fontSize: 23, fontWeight: "bold", marginTop: 15 },
  phone: { color: "#999", marginTop: 5 },
  info: { width: "100%", backgroundColor: "#f8f5fa", padding: 20, borderRadius: 12, marginTop: 30 },
  infoTitle: { color: "#999" },
  infoText: { fontSize: 17, fontWeight: "bold", marginTop: 7 },
  button: { backgroundColor: "#a800d8", padding: 16, borderRadius: 10, alignItems: "center", marginTop: 30, width: "100%" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});