import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  title: string;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
};

const ProfileHeader: React.FC<Props> = ({
  title,
  onNotificationPress,
  onMenuPress,
}) => {
  return (
    <LinearGradient
      colors={["#FF671F", "#a855f7", "#2563eb"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
    >
      <Text style={styles.title}>{title}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn} onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={20} color="#fff" />
          <View style={styles.dot} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={onMenuPress}>
          <Ionicons name="menu-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  dot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#facc15",
  },
});
