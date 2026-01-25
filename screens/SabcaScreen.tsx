import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ProfileHeader from "../components/ProfileHeader";
import DivisionCard from "../components/DivisionCard";
import StatsRow from "../components/StatsRow";
import LeadershipSection from "../components/LeadershipSection";
import AboutSabca from "../components/AboutSabca";

const leaders = [
  { name: "Rajesh Kumar", role: "President" },
  { name: "Venkat Reddy", role: "Vice President" },
  { name: "Srinivas Rao", role: "Secretary" },
  { name: "Prakash Naidu", role: "Treasurer" },
  { name: "Dr. Ramesh Babu", role: "Chief Advisor" },
  { name: "Murthy Krishna", role: "Joint Secretary" },
];

const SabcaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader title="SABCA" />


      <ScrollView contentContainerStyle={styles.content}>
        <View style={{ marginTop: 36 }}>
  <DivisionCard division="Visakhapatnam" />
</View>

        <StatsRow />
        <LeadershipSection leaders={leaders} />
        <AboutSabca />
      </ScrollView>
    </View>
  );
};

export default SabcaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  content: {
  paddingHorizontal: 20,
  paddingTop: 24,
  paddingBottom: 140,
},

});
