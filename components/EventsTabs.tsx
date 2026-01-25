import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type EventsTabType = "Events" | "News" | "Gallery";

type Props = {
  activeTab: EventsTabType;
  onChange: (tab: EventsTabType) => void;
};

const tabs: EventsTabType[] = ["Events", "News", "Gallery"];

const EventsTabs: React.FC<Props> = ({ activeTab, onChange }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onChange(tab)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                isActive && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default EventsTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6b7280",
  },
  activeTabText: {
    color: "#dc2626",
  },
});
