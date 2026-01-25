import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  image: any;
  title: string;
  category: string;
};

const GalleryItem: React.FC<Props> = ({ image, title, category }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <Image source={image} style={styles.image} />

      {/* Overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.2)", "transparent"]}
        style={styles.overlay}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GalleryItem;

const styles = StyleSheet.create({
  card: {
  width: "49%",   // 👈 forces 2 per row
  aspectRatio: 1,
  borderRadius: 18,
  overflow: "hidden",
  marginBottom: 12,
},

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    justifyContent: "flex-end",
  },

  title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
  },

  category: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 11,
  },
});
