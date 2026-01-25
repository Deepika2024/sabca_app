import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const partners = [
  {
    name: "BuildTech Solutions",
    type: "Construction Materials",
    image: require("../assets/partners/buildtech.jpg"),
  },
  {
    name: "SafetyFirst Equipment",
    type: "Safety Equipment",
    image: require("../assets/partners/safetyfirst.jpg"),
  },
  {
    name: "TechConstruct India",
    type: "Technology Solutions",
    image: require("../assets/partners/techconstruct.jpg"),
  },
  {
    name: "GreenBuild Materials",
    type: "Eco-Friendly Materials",
    image: require("../assets/partners/greenbuild.jpg"),
  },
];

const ServicesBannerAndPartners = () => {
  return (
    <View>
      {/* ===== MEMBER SERVICES BANNER ===== */}
      <LinearGradient
        colors={["#dc2626", "#b91c1c"]}
        style={styles.banner}
      >
        <Text style={styles.bannerTitle}>Member Services</Text>
        <Text style={styles.bannerSubtitle}>
          Comprehensive support for all your construction business needs
        </Text>
      </LinearGradient>

      {/* ===== PARTNERS SECTION ===== */}
      <View style={styles.partnersSection}>
        <View style={styles.partnersHeader}>
          <Text style={styles.partnersTitle}>Our Partners</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.grid}>
          {partners.map((item) => (
            <View key={item.name} style={styles.partnerCard}>
              <View style={styles.logoWrapper}>
                <Image
                  source={item.image}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.partnerName}>{item.name}</Text>
              <Text style={styles.partnerType}>{item.type}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ServicesBannerAndPartners;

const styles = StyleSheet.create({
  /* ===== Banner ===== */
  banner: {
    marginTop: 16,
    borderRadius: 20,
    padding: 22,
  },
  bannerTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },
  bannerSubtitle: {
    color: "#fee2e2",
    fontSize: 13,
  },

  /* ===== Partners ===== */
  partnersSection: {
    marginTop: 26,
  },
  partnersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  partnersTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dc2626",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  partnerCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  logoWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  logo: {
    width: 60,
    height: 60,
  },

  partnerName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 4,
  },

  partnerType: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});
