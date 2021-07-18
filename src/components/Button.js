import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={icon} size={20} color="#f0f0f0" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef5350',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    minWidth: 100,
    margin: 5,
    padding: 12,
    flexDirection: 'row',
  },
  title: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
});
