import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CommunityPost from "./CommunityPost";

/* Use SAME avatar from leaders folder */
const AVATAR = require("../../assets/leaders/avatar.jpg");

const POSTS = [
  {
    name: "Rajesh Kumar",
    role: "Senior Contractor",
    time: "2 hours ago",
    content:
      "Great news! Just completed the new commercial complex project in Vijayawada. Thanks to SABCA for continuous support.",
    likes: 45,
    comments: 8,
    shares: 3,
    avatar: AVATAR,
    liked: false,
  },
  {
    name: "Venkat Rao",
    role: "Building Contractor",
    time: "5 hours ago",
    content:
      "Reminder: Safety workshop is scheduled for next week. All members are encouraged to attend.",
    likes: 67,
    comments: 12,
    shares: 15,
    avatar: AVATAR,
    liked: true,
  },
  {
    name: "Lakshmi Devi",
    role: "Civil Contractor",
    time: "1 day ago",
    content:
      "Does anyone have experience with the new digital certification system? I need guidance on uploading documents.",
    likes: 23,
    comments: 18,
    shares: 2,
    avatar: AVATAR,
    liked: false,
  },
];

const CommunityPostList = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {POSTS.map((post, index) => (
        <CommunityPost key={index} post={post} />
      ))}
    </ScrollView>
  );
};

export default CommunityPostList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120, // space for bottom tab
  },
});
