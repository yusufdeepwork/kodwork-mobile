import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = ({titleName, titleDesc}) => {
  return (
    <View style={styles.inline_container}>
      <Text style={styles.title}>{titleName}:</Text>
      <Text style={styles.desc}>{titleDesc}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  inline_container: {
    flexDirection: 'row',
    margin: 5,
  },
  title: {
    color: '#ef5350',
    fontWeight: 'bold',
    fontSize: 16,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 3,
  },
});
