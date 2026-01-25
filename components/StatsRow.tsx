import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatsRow: React.FC = () => {
  const stats = [
    { value: "1,247", label: "Members" },
    { value: "156", label: "Projects" },
    { value: "23", label: "Partners" },
  ];

  return (
    <View style={styles.row}>
      {stats.map((item) => (
        <View key={item.label} style={styles.box}>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default StatsRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  box: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    width: "30%",
    alignItems: "center",
  },
  value: {
    fontSize: 20,
    color: "#dc2626",
    fontWeight: "700",
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
  },
});
