import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

/* Enable animation on Android */
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  colors: string[];
  items: string[];
};

const ServiceAccordion: React.FC<Props> = ({
  title,
  icon,
  colors,
  items,
}) => {
  const [open, setOpen] = useState(true);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View style={styles.card}>
      {/* ===== HEADER ===== */}
      <LinearGradient colors={colors} style={styles.header}>
        <View style={styles.left}>
          <View style={styles.iconBox}>
            <Ionicons name={icon} size={22} color="#fff" />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity onPress={toggleAccordion}>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </LinearGradient>

      {/* ===== CONTENT ===== */}
      {open && (
        <View style={styles.content}>
          {items.map((item) => (
            <View key={item} style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}

          <LinearGradient
            colors={["#FF671F", "#2563eb"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Learn More</Text>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default ServiceAccordion;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 18,
    overflow: "hidden",
  },

  header: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  content: {
    padding: 18,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#dc2626",
    marginRight: 10,
  },

  text: {
    fontSize: 14,
    color: "#1f2937",
  },

  button: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
