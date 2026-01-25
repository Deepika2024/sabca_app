import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LeaderCard, { Leader } from "./LeaderCard";

type Props = {
  leaders: Leader[];
};

const LeadershipSection: React.FC<Props> = ({ leaders }) => {
  return (
    <View>
      <Text style={styles.title}>Leadership Team</Text>
      {leaders.map((leader) => (
        <LeaderCard key={leader.name} leader={leader} />
      ))}
    </View>
  );
};

export default LeadershipSection;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16,
  },
});
