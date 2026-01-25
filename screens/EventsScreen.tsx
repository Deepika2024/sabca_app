import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import ProfileHeader from "../components/ProfileHeader";
import EventsTabs, { EventsTabType } from "../components/EventsTabs";
import EventCard from "../components/EventCard";
import NewsCard from "../components/NewsCard";
import GalleryItem from "../components/GalleryItem";

const EventsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventsTabType>("Events");

  return (
    <View style={styles.container}>
      <ProfileHeader title="Events" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* INTERNAL TABS */}
        <EventsTabs activeTab={activeTab} onChange={setActiveTab} />

        {/* ================= EVENTS TAB ================= */}
        {activeTab === "Events" && (
          <>
            <EventCard
              image={require("../assets/events/event1.jpg")}
              title="Annual General Meeting 2024"
              date="Dec 15, 2024"
              location="SABCA Head Office, Visakhapatnam"
              time="10:00 AM"
            />

            <EventCard
              image={require("../assets/events/event2.jpg")}
              title="Construction Safety Workshop"
              date="Dec 20, 2024"
              location="Training Center, Vijayawada"
              time="2:00 PM"
            />

            <EventCard
              image={require("../assets/events/event3.jpg")}
              title="New Building Codes Seminar"
              date="Jan 5, 2025"
              location="Convention Hall, Guntur"
              time="11:00 AM"
            />
          </>
        )}

        {/* ================= NEWS TAB ================= */}
        {activeTab === "News" && (
  <>
    <NewsCard
      image={require("../assets/news/news1.jpg")}
      category="Announcement"
      date="Dec 10, 2024"
      title="SABCA Announces New Member Benefits"
      description="Enhanced insurance coverage and training programs for all members."
    />

    <NewsCard
      image={require("../assets/news/news2.jpg")}
      category="Industry News"
      date="Dec 8, 2024"
      title="Government Approves New Infrastructure Projects"
      description="Major opportunities for contractors in upcoming state projects."
    />

    <NewsCard
      image={require("../assets/news/news3.jpg")}
      category="Technology"
      date="Dec 5, 2024"
      title="Digital Certification System Launched"
      description="Members can now access all certificates digitally through the app."
    />
  </>
)}


        {/* ================= GALLERY TAB ================= */}
        {activeTab === "Gallery" && (
  <View style={styles.galleryGrid}>
    <GalleryItem
      image={require("../assets/gallery/gal1.jpg")}
      title="Infrastructure Development"
      category="Projects"
    />
    <GalleryItem
      image={require("../assets/gallery/gal2.jpg")}
      title="Member Meeting"
      category="Events"
    />
    <GalleryItem
      image={require("../assets/gallery/gal3.jpg")}
      title="Excellence Awards 2024"
      category="Awards"
    />
    <GalleryItem
      image={require("../assets/gallery/gal4.jpg")}
      title="Safety Training Program"
      category="Training"
    />
    <GalleryItem
      image={require("../assets/gallery/gal5.jpg")}
      title="Commercial Complex"
      category="Projects"
    />
    <GalleryItem
      image={require("../assets/gallery/gal6.jpg")}
      title="SABCA Team 2024"
      category="Events"
    />
  </View>
)}

      </ScrollView>
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  content: {
    padding: 16,
    paddingBottom: 140,
  },
  placeholder: {
    marginTop: 40,
    alignItems: "center",
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  placeholderText: {
    fontSize: 14,
    color: "#6b7280",
  },
  galleryGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},


});
