import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CommunityPost({ post }: any) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.role}>{post.role}</Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={18} color="#9ca3af" />
      </View>

      {/* Content */}
      <Text style={styles.content}>{post.content}</Text>

      {/* Stats */}
      <View style={styles.stats}>
        <Text>{post.likes} likes</Text>
        <Text>{post.comments} comments</Text>
        <Text>{post.shares} shares</Text>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <Action icon="heart-outline" label="Like" />
        <Action icon="chatbubble-outline" label="Comment" />
        <Action icon="share-social-outline" label="Share" />
      </View>
    </View>
  );
}

function Action({ icon, label }: any) {
  return (
    <TouchableOpacity style={styles.actionBtn}>
      <Ionicons name={icon} size={18} color="#6b7280" />
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    padding: 14,
    gap: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  name: { fontWeight: "700" },
  role: { fontSize: 12, color: "#6b7280" },
  time: { fontSize: 11, color: "#9ca3af" },
  content: {
    paddingHorizontal: 14,
    color: "#374151",
    fontSize: 14,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#f3f4f6",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#f3f4f6",
    paddingTop: 6,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionText: {
    fontSize: 13,
    color: "#6b7280",
  },
});
