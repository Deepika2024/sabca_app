import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const leaders = [
  { name: "Rajesh Kumar", role: "President" },
  { name: "Venkat Reddy", role: "Vice President" },
  { name: "Srinivas Rao", role: "Secretary" },
  { name: "Prakash Naidu", role: "Treasurer" },
  { name: "Dr. Ramesh Babu", role: "Chief Advisor" },
  { name: "Murthy Krishna", role: "Joint Secretary" },
];

const SabcaScreen = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={["#dc2626", "#2563eb"]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>SABCA</Text>

        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content}>
        {/* DIVISION CARD */}
        <LinearGradient
          colors={["#1f2937", "#111827"]}
          style={styles.divisionCard}
        >
          <Ionicons name="business-outline" size={28} color="#fff" />
          <View>
            <Text style={styles.divisionLabel}>Your Division</Text>
            <Text style={styles.divisionText}>Visakhapatnam</Text>
          </View>
        </LinearGradient>

        {/* STATS */}
        <View style={styles.statsRow}>
          {[
            { value: "1,247", label: "Members" },
            { value: "156", label: "Projects" },
            { value: "23", label: "Partners" },
          ].map((item) => (
            <View key={item.label} style={styles.statBox}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* LEADERSHIP */}
        <Text style={styles.sectionTitle}>Leadership Team</Text>

        {leaders.map((leader) => (
          <View key={leader.name} style={styles.leaderCard}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.avatar}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.leaderName}>{leader.name}</Text>
              <Text style={styles.leaderRole}>{leader.role}</Text>

              <View style={styles.actions}>
                <TouchableOpacity style={styles.callBtn}>
                  <Ionicons name="call-outline" size={16} color="#fff" />
                  <Text style={styles.callText}>Call</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.emailBtn}>
                  <Ionicons name="mail-outline" size={16} color="#374151" />
                  <Text style={styles.emailText}>Email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* ABOUT */}
        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>About SABCA</Text>
          <Text style={styles.aboutText}>
            State of Andhra Pradesh Building Contractors Association is dedicated
            to promoting the interests of building contractors and ensuring
            quality construction practices across the state.
          </Text>

          <TouchableOpacity style={styles.learnBtn}>
            <Text style={styles.learnText}>Learn More About SABCA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SabcaScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  header: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "PoppinsBold",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  divisionCard: {
    flexDirection: "row",
    gap: 12,
    padding: 20,
    borderRadius: 16,
  },

  divisionLabel: {
    fontSize: 12,
    color: "#9ca3af",
    fontFamily: "Inter",
  },

  divisionText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "InterBold",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  statBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    width: "30%",
    alignItems: "center",
  },

  statValue: {
    fontSize: 20,
    color: "#dc2626",
    fontFamily: "InterBold",
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: "InterBold",
    marginVertical: 16,
  },

  leaderCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    gap: 12,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },

  leaderName: {
    fontSize: 14,
    fontFamily: "InterBold",
  },

  leaderRole: {
    fontSize: 12,
    color: "#dc2626",
    marginBottom: 8,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  callBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc2626",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    gap: 6,
  },

  callText: {
    color: "#fff",
    fontSize: 12,
  },

  emailBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    gap: 6,
  },

  emailText: {
    color: "#374151",
    fontSize: 12,
  },

  aboutBox: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginTop: 20,
  },

  aboutTitle: {
    fontSize: 16,
    fontFamily: "InterBold",
    marginBottom: 6,
  },

  aboutText: {
    fontSize: 13,
    color: "#4b5563",
    lineHeight: 20,
  },

  learnBtn: {
    marginTop: 14,
    backgroundColor: "#fee2e2",
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  learnText: {
    color: "#dc2626",
    fontWeight: "600",
  },
});
