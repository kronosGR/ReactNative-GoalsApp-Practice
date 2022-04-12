import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ itemData, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
