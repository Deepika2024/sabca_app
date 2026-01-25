import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const SupportCard = () => {
  return (
    <LinearGradient
      colors={["#1f2937", "#020617"]}
      style={styles.container}
    >
      {/* TOP ICON */}
      <View style={styles.iconCircle}>
        <Ionicons name="headset-outline" size={30} color="#fff" />
      </View>

      {/* TEXT */}
      <Text style={styles.title}>Need Help?</Text>
      <Text style={styles.subtitle}>
        Our support team is here to assist you
      </Text>

      {/* BUTTONS */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.callBtn}>
          <Ionicons name="call-outline" size={18} color="#fff" />
          <Text style={styles.callText}>Call Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatBtn}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={18}
            color="#020617"
          />
          <Text style={styles.chatText}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SupportCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    padding: 24,
    marginTop: 24,
    alignItems: "center",
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 18,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },

  callBtn: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  callText: {
    color: "#fff",
    fontWeight: "600",
  },

  chatBtn: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  chatText: {
    color: "#020617",
    fontWeight: "600",
  },
});
