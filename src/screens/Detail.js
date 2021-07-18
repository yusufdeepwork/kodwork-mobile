import React, {useCallback} from 'react';
import {StyleSheet, Text, View, Linking, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import Button from '../components/Button';
import Title from '../components/Title';

const Detail = ({route}) => {
  const handlePressToURL = useCallback(async () => {
    const supported = await Linking.canOpenURL(route.params.jobSite);
    if (supported) {
      await Linking.openURL(route.params.jobSite);
    } else {
      Alert.alert(`Don't know how to open this URL: ${route.params.jobSite}`);
    }
  }, [route.params.jobSite]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}> {route.params.name}</Text>
      <Title titleName="Locations" titleDesc={route.params.location} />
      <Title titleName="Job Level" titleDesc={route.params.level} />
      <Text style={styles.detailsTitle}>Job Detail</Text>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${route.params.contents}</body></html>`,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" icon="share" onPress={handlePressToURL} />
        <Button title="Favorite Job" icon="heart" onPress={() => {}} />
      </View>
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
  detailsTitle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: '#34444c',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});
