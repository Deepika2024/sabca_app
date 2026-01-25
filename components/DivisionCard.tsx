import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  division: string;
};

const DivisionCard: React.FC<Props> = ({ division }) => {
  return (
    <LinearGradient colors={["#1f2937", "#111827"]} style={styles.card}>
      <Ionicons name="business-outline" size={28} color="#fff" />
      <View>
        <Text style={styles.label}>Your Division</Text>
        <Text style={styles.text}>{division}</Text>
      </View>
    </LinearGradient>
  );
};

export default DivisionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 20,
    padding: 26,
    borderRadius: 16,
  },
  label: {
    fontSize: 12,
    color: "#9ca3af",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});
