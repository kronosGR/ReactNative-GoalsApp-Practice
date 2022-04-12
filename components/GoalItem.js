import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ itemData, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItem.bind(this, id)}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
