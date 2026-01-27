import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Member = {
  name: string;
  memberId: string;
  division: string;
  validUntil: string;
  status: "active" | "inactive";
};

type Props = {
  member: Member;
};

const MemberCard = ({ member }: Props) => {
  return (
    <LinearGradient
      colors={["#FF671F", "#E04E0F"]}
      style={styles.card}
    >
      {/* Top */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.badge}>SABCA MEMBER</Text>
          <Text style={styles.name}>{member.name}</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={28} color="#fff" />
        </View>
      </View>

      {/* Info rows */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Member ID</Text>
        <Text style={styles.value}>{member.memberId}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Division</Text>
        <Text style={styles.value}>{member.division}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Valid Until</Text>
        <Text style={styles.value}>{member.validUntil}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statusRow}>
          <View style={styles.greenDot} />
          <Text style={styles.statusText}>
            {member.status === "active" ? "Active Member" : "Inactive"}
          </Text>
        </View>

        <TouchableOpacity style={styles.qrBtn}>
          <Text style={styles.qrText}>View QR</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MemberCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,          // ⬆ more rounded
    padding: 24,               // ⬆ more inner space
    marginTop: 35,             // ⬆ more height feel
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,          // ⬆ spacing
  },

  badge: {
    color: "#fee2e2",
    fontSize: 13,              // ⬆ slightly bigger
    fontWeight: "600",
    marginBottom: 6,
  },

  name: {
    color: "#fff",
    fontSize: 26,              // ⬆ BIG change (important)
    fontWeight: "700",
  },

  avatar: {
    width: 68,                 // ⬆ bigger avatar
    height: 68,
    borderRadius: 34,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,          // ⬆ more vertical spacing
  },

  label: {
    color: "#fee2e2",
    fontSize: 14,              // ⬆ clearer
  },

  value: {
    color: "#fff",
    fontSize: 15,              // ⬆ slightly bigger
    fontWeight: "600",
  },

  footer: {
    marginTop: 20,             // ⬆ more separation
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.25)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 9,                  // ⬆ tiny increase
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "#22c55e",
    marginRight: 8,
  },

  statusText: {
    color: "#fff",
    fontSize: 14,              // ⬆ better readability
    fontWeight: "500",
  },

  qrBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,     // ⬆ wider button
    paddingVertical: 8,        // ⬆ taller button
    borderRadius: 24,
  },

  qrText: {
    color: "#dc2626",
    fontWeight: "600",
    fontSize: 14,
  },
});
