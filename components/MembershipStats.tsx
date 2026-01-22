import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Stat = {
  id: string;
  value: number;
  label: string;
};

type Props = {
  stats: Stat[];
};

const MembershipStats = ({ stats }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Membership Stats</Text>

      <View style={styles.row}>
        {stats.map((stat, index) => (
          <View
            key={stat.id}
            style={[
              styles.box,
              index === 1 && styles.middleBox,
            ]}
          >
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MembershipStats;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    flex: 1,
    alignItems: "center",
  },
  middleBox: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#f3f4f6",
  },
  value: {
    fontSize: 22,
    fontWeight: "700",
    color: "#dc2626",
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },
});
