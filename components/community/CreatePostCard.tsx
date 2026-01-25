import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CreatePostCard() {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <View style={styles.icon}>
        <Ionicons name="create-outline" size={20} color="#dc2626" />
      </View>
      <Text style={styles.text}>
        Share something with the community...
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 30,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fee2e2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  text: {
    color: "#6b7280",
    fontSize: 14,
  },
});
