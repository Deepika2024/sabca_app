import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import ProfileScreen from "../screens/ProfileScreen";

type TabParamList = {
  Profile: undefined;
  SABCA: undefined;
  Events: undefined;
  Services: undefined;
  Community: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const DummyScreen = ({ title }: { title: string }) => (
  <View style={styles.dummy}>
    <Text>{title}</Text>
  </View>
);

const GradientTabBarBackground = () => (
  <LinearGradient
    colors={["#dc2626", "#a855f7", "#2563eb"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={StyleSheet.absoluteFill}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarBackground: () => <GradientTabBarBackground />,

        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          position: "absolute",
        },

        tabBarIcon: ({ focused }) => {
          const icons: Record<
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
              name={icons[route.name]}
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
      <Tab.Screen name="SABCA">
        {() => <DummyScreen title="SABCA" />}
      </Tab.Screen>
      <Tab.Screen name="Events">
        {() => <DummyScreen title="Events" />}
      </Tab.Screen>
      <Tab.Screen name="Services">
        {() => <DummyScreen title="Services" />}
      </Tab.Screen>
      <Tab.Screen name="Community">
        {() => <DummyScreen title="Community" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginTop: -2,
    fontWeight: "500",
  },
  dummy: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
