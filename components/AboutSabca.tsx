import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AboutSabca: React.FC = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>About SABCA</Text>
      <Text style={styles.text}>
        State of Andhra Pradesh Building Contractors Association is dedicated to
        promoting the interests of building contractors and ensuring quality
        construction practices across the state.
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Learn More About SABCA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutSabca;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
  },
  btn: {
    marginTop: 14,
    backgroundColor: "#fee2e2",
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: {
    color: "#dc2626",
    fontWeight: "600",
  },
});
