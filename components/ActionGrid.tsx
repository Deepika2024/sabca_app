import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Action = {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  background: string;
};

type Props = {
  actions: Action[];
};

const ActionGrid = ({ actions }: Props) => {
  return (
    <View style={styles.grid}>
      {actions.map(item => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: item.background }]}>
            <Ionicons name={item.icon} size={22} color={item.color} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.sub}>{item.subtitle}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: { fontWeight: '600' },
  sub: { fontSize: 12, color: '#6B7280' },
});
