import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Info = {
  id: string;
  label: string;
  value: string;
  icon: any;
};

type Props = {
  info: Info[];
};

const PersonalInfo = ({ info }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Personal Information</Text>

      {info.map(item => (
        <View key={item.id} style={styles.row}>
          <View style={styles.iconCircle}>
            <Ionicons name={item.icon} size={20} color="#374151" />
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      ))}

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <LinearGradient
          colors={["#dc2626", "#2563eb"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryBtn}
        >
          <TouchableOpacity style={styles.btnContent}>
            <Ionicons name="pencil-outline" size={16} color="#fff" />
            <Text style={styles.primaryText}>Edit Profile</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity style={styles.outlineBtn}>
          <Ionicons name="share-social-outline" size={16} color="#111827" />
          <Text style={styles.outlineText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,            // ⬆ more spacing
    marginTop: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,       // ⬆ spacing between rows
  },

  iconCircle: {
    width: 44,              // ⬆ bigger icon
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  textBlock: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 2,
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  /* Buttons */
  buttonRow: {
    flexDirection: "row",
    marginTop: 24,
    gap: 12,
  },

  primaryBtn: {
    flex: 1,
    borderRadius: 14,
  },

  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    gap: 8,
  },

  primaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  outlineBtn: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  outlineText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },
});
