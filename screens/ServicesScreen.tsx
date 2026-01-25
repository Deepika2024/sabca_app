import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import ProfileHeader from "../components/ProfileHeader";
import ServicesBannerAndPartners from "../components/ServicesBannerAndPartners";
import ServiceAccordion from "../components/ServiceAccordion";
import SupportCard from "../components/SupportCard";

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader title="Services" />

      <ScrollView contentContainerStyle={styles.content}>
        <ServicesBannerAndPartners />
       <ServiceAccordion
          title="Membership Services"
          icon="ribbon-outline"
          colors={["#ef4444", "#dc2626"]}
          items={[
            "New Member Registration",
            "Membership Renewal",
            "ID Card Issuance",
            "Certificate Verification",
          ]}
        />

        {/* 2️⃣ Training & Development */}
        <ServiceAccordion
          title="Training & Development"
          icon="school-outline"
          colors={["#f97316", "#ea580c"]}
          items={[
            "Safety Training Programs",
            "Technical Workshops",
            "Skill Development",
            "Certification Courses",
          ]}
        />

        {/* 3️⃣ Legal Support */}
        <ServiceAccordion
          title="Legal Support"
          icon="scale-outline"
          colors={["#14b8a6", "#0d9488"]}
          items={[
            "Contract Review",
            "Legal Consultation",
            "Dispute Resolution",
            "Compliance Guidance",
          ]}
        />

        {/* 4️⃣ Financial Services */}
        <ServiceAccordion
          title="Financial Services"
          icon="cash-outline"
          colors={["#22c55e", "#16a34a"]}
          items={[
            "Loan Assistance",
            "Insurance Support",
            "Tax Consultation",
            "Financial Planning",
          ]}
        />

        {/* 5️⃣ Project Support */}
        <ServiceAccordion
          title="Project Support"
          icon="business-outline"
          colors={["#f59e0b", "#d97706"]}
          items={[
            "Tender Information",
            "Project Bidding Help",
            "Technical Guidance",
            "Quality Assurance",
          ]}
        />

        {/* 6️⃣ Networking */}
        <ServiceAccordion
          title="Networking"
          icon="people-outline"
          colors={["#06b6d4", "#0891b2"]}
          items={[
            "Industry Events",
            "Business Meetings",
            "Partner Connect",
            "Collaboration Support",
          ]}
        />

        <SupportCard />
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
});
