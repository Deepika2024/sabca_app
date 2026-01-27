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

type Props = {
  image: any;
  title: string;
  date: string;
  location: string;
  time: string;
};

const EventCard: React.FC<Props> = ({
  image,
  title,
  date,
  location,
  time,
}) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.dateBadge}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={16} color="#6b7280" />
          <Text style={styles.meta}>{location}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="time-outline" size={16} color="#6b7280" />
          <Text style={styles.meta}>{time}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={["#FF671F", "#2563eb"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },

  imageWrapper: {
    height: 180,
    width: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  dateBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#dc2626",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  dateText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  meta: {
    marginLeft: 6,
    fontSize: 13,
    color: "#4b5563",
  },

  button: {
    marginTop: 14,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
