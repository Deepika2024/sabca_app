import React from "react";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

/* ===== Import Screens ===== */
import ProfileScreen from "../screens/ProfileScreen";
import SabcaScreen from "../screens/SabcaScreen";
import EventsScreen from "../screens/EventsScreen";
import ServicesScreen from "../screens/ServicesScreen";
import CommunityScreen from "../screens/CommunityScreen";


/* ===== Types ===== */
export type TabParamList = {
  Profile: undefined;
  SABCA: undefined;
  Events: undefined;
  Services: undefined;
  Community: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

/* ===== Gradient Background ===== */
const TabBarBackground = () => (
  <LinearGradient
    colors={["#dc2626", "#a855f7", "#2563eb"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={StyleSheet.absoluteFill}
  />
);

/* ===== Navigator ===== */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarBackground: () => <TabBarBackground />,

        tabBarStyle: {
          height: 72,
          borderTopWidth: 0,
          position: "absolute",
        },

        tabBarIcon: ({ focused }) => {
          const iconMap: Record<
            keyof TabParamList,
            keyof typeof Ionicons.glyphMap
          > = {
            Profile: "person-outline",
            SABCA: "business-outline",
            Events: "calendar-outline",
            Services: "heart-outline",
            Community: "chatbubble-ellipses-outline",
          };

          return (
            <Ionicons
              name={iconMap[route.name]}
              size={24}
              color={focused ? "#ffffff" : "rgba(255,255,255,0.6)"}
            />
          );
        },

        tabBarLabel: ({ focused }) => (
          <Text
            style={[
              styles.label,
              { color: focused ? "#ffffff" : "rgba(255,255,255,0.6)" },
            ]}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="SABCA" component={SabcaScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />

      
    </Tab.Navigator>
  );
};

export default TabNavigator;

/* ===== Styles ===== */
const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginTop: -2,
    fontWeight: "500",
  },
});
