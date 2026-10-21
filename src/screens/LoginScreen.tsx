import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ setPage }: { setPage: (page: string) => void }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Артқа қайту батырмасы */}
      <TouchableOpacity style={styles.backButton} onPress={() => setPage("home")}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Тақырып */}
        <Text style={styles.title}>Привет, с возвращением!</Text>
        <Text style={styles.subtitle}>Войдите в свой аккаунт</Text>

        {/* Телефон нөмірі өрісі */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Номер телефона"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* Пароль өрісі */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor="#aaa"
            style={styles.input}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons
              name={secureText ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9C27B0"
            />
          </TouchableOpacity>
        </View>

        {/* Парольді ұмыттыңыз ба? */}
        <TouchableOpacity style={styles.forgotContainer} onPress={() => setPage("forgot")}>
          <Text style={styles.forgotText}>Забыли пароль?</Text>
        </TouchableOpacity>

        {/* Кіру батырмасы */}
        <TouchableOpacity style={styles.loginButton} onPress={() => setPage("home")}>
          <Text style={styles.loginButtonText}>Войти</Text>
        </TouchableOpacity>

        {/* Тіркелуге өту */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerGrayText}>У вас нет аккаунта? </Text>
          <TouchableOpacity onPress={() => setPage("register")}>
            <Text style={styles.registerLinkText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000",
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    color: "#9C27B0",
    fontSize: 14,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#9C27B0",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  registerGrayText: {
    color: "#888",
    fontSize: 14,
  },
  registerLinkText: {
    color: "#9C27B0",
    fontSize: 14,
    fontWeight: "600",
  },
});