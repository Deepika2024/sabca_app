import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export type Leader = {
  name: string;
  role: string;
};

type Props = {
  leader: Leader;
};

const LeaderCard: React.FC<Props> = ({ leader }) => {
  return (
    <View style={styles.card}>
      {/* Avatar */}
      <Image
        source={require("../assets/leaders/avatar.jpg")}
        style={styles.avatar}
      />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{leader.name}</Text>
        <Text style={styles.role}>{leader.role}</Text>

        <View style={styles.actions}>
          {/* Call Button */}
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={["#dc2626", "#2563eb"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.callBtn}
            >
              <Ionicons name="call-outline" size={16} color="#fff" />
              <Text style={styles.callText}>Call</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Email Button */}
          <TouchableOpacity style={styles.emailBtn}>
            <Ionicons name="mail-outline" size={16} color="#374151" />
            <Text style={styles.emailText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LeaderCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: "center",
  },

  avatar: {
   width: 64,
height: 64,
borderRadius: 32,

    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  role: {
    fontSize: 13,
    color: "#dc2626",
    marginVertical: 4,
  },

  actions: {
    flexDirection: "row",
    marginTop: 12,
  },

  callBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginRight: 12,
  },

  callText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 6,
  },

  emailBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },

  emailText: {
    color: "#374151",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 6,
  },
});
