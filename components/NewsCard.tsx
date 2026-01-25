import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  image: any;
  category: string;
  date: string;
  title: string;
  description: string;
};

const NewsCard: React.FC<Props> = ({
  image,
  category,
  date,
  title,
  description,
}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      {/* IMAGE */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.dateRow}>
          <Ionicons name="time-outline" size={14} color="#6b7280" />
          <Text style={styles.dateText}>{date}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.readMore}>
          <Text style={styles.readMoreText}>Read More</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={14}
            color="#dc2626"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 16,
  },

  imageWrapper: {
    position: "relative",
    height: 160,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1f2937",
  },

  content: {
    padding: 16,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  dateText: {
    fontSize: 12,
    color: "#6b7280",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 12,
  },

  readMore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  readMoreText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dc2626",
  },
});
