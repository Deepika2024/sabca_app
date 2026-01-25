import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import CreatePostCard from "../components/community/CreatePostCard";
import CommunityPostList from "../components/community/CommunityPostList";

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <ProfileHeader title="Community" showNotifications showMenu />

      {/* Create Post */}
      <CreatePostCard />

      {/* Posts Feed */}
      <CommunityPostList />
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
});
