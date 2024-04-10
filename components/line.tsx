import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Line() {
  return (
    <View style={styles.line} />
  );
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    marginTop: 10,
    marginBottom: 10, 
    width: '100%',
    backgroundColor: '#999',
  },
});
