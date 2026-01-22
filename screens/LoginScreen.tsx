import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/AuthNavigator";

type NavProp = NativeStackNavigationProp<AuthStackParamList, "Login">;

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavProp>();

  return (
    <LinearGradient
      colors={["#ef4444", "#a855f7", "#2563eb"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.bg}
    >
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.card}>
          {/* Logo */}
          <LinearGradient
            colors={["#dc2626", "#2563eb"]}
            style={styles.logoBox}
          >
            <Ionicons name="business" size={36} color="#fff" />
          </LinearGradient>

          <Text style={styles.title}>SABCA</Text>
          <Text style={styles.subtitle}>Welcome back! Please login</Text>

          {/* Email */}
          <Text style={styles.label}>Email or Phone</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={18} color="#9ca3af" />
            <TextInput
              placeholder="Enter email or phone"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="#9ca3af" />
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#9ca3af"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>

          {/* Remember + Forgot */}
          <View style={styles.rowBetween}>
            <View style={styles.rememberRow}>
              <View style={styles.checkbox} />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login */}
          <LinearGradient
            colors={["#dc2626", "#2563eb"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginBtn}
          >
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.replace("Main")}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Social */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-google" size={18} color="#ea4335" />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-facebook" size={18} color="#1877f2" />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Register */}
          <Text style={styles.registerText}>
            Don’t have an account?{" "}
            <Text style={styles.registerLink}>Register Now</Text>
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  center: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: Platform.OS === "web" ? 420 : "100%",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 28,
    padding: 24,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#9ca3af",
    marginRight: 6,
  },
  rememberText: {
    fontSize: 12,
    color: "#6b7280",
  },
  forgot: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7c3aed",
  },
  loginBtn: {
    borderRadius: 14,
    paddingVertical: 14,
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  or: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#6b7280",
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 14,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: "#6b7280",
  },
  registerLink: {
    color: "#dc2626",
    fontWeight: "700",
  },
});
