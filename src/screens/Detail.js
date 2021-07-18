import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const Detail = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {route.params.name}</Text>
      <View style={styles.inline_container}>
        <Text style={styles.title}>Locations:</Text>
        <Text style={styles.desc}>{route.params.location}</Text>
      </View>
      <View style={styles.inline_container}>
        <Text style={styles.title}>Job Level:</Text>
        <Text style={styles.desc}>{route.params.level}</Text>
      </View>
      <Text style={styles.detailsTitle}>Job Detail</Text>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${route.params.contents}</body></html>`,
        }}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#34444c',
    padding: 5,
  },
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
  detailsTitle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: '#34444c',
  },
});
