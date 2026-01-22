import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import MemberCard from '../components/MemberCard';
import ActionGrid from '../components/ActionGrid';
import PersonalInfo from '../components/PersonalInfo';
import MembershipStats from '../components/MembershipStats';

const ProfileScreen = () => {
  const member = {
  name: 'Rajesh Kumar',
  memberId: 'SABCA-2024-1547',
  division: 'Visakhapatnam',
  validUntil: '31 Dec 2025',
  status: 'active' as const,
};


  const actions = [
    {
      id: '1',
      title: 'Renew',
      subtitle: 'Membership',
      icon: 'refresh-outline',
      color: '#DC2626',
      background: '#FEE2E2',
    },
    {
      id: '2',
      title: 'Download',
      subtitle: 'ID Card',
      icon: 'download-outline',
      color: '#2563EB',
      background: '#DBEAFE',
    },
    {
      id: '3',
      title: 'Documents',
      subtitle: 'View All',
      icon: 'document-text-outline',
      color: '#7C3AED',
      background: '#EDE9FE',
    },
    {
      id: '4',
      title: 'History',
      subtitle: 'Transactions',
      icon: 'time-outline',
      color: '#EA580C',
      background: '#FFEDD5',
    },
  ];

  const personalInfo = [
    { id: '1', label: 'Phone', value: '+91 98765 43210', icon: 'call-outline' },
    { id: '2', label: 'Email', value: 'rajesh.kumar@example.com', icon: 'mail-outline' },
    { id: '3', label: 'Company', value: 'Kumar Constructions', icon: 'business-outline' },
    { id: '4', label: 'Address', value: 'Visakhapatnam, AP', icon: 'location-outline' },
  ];

  const stats = [
    { id: '1', value: 3, label: 'Years' },
    { id: '2', value: 12, label: 'Events' },
    { id: '3', value: 5, label: 'Certificates' },
  ];

  return (
    <View style={styles.container}>
      <ProfileHeader title="My Profile" />

      <ScrollView contentContainerStyle={styles.content}>
  <MemberCard member={member} />
  <ActionGrid actions={actions} />
  <PersonalInfo info={personalInfo} />
  <MembershipStats stats={stats} />
</ScrollView>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  content: { padding: 16, paddingBottom: 120 },
});
