import React, {useCallback} from 'react';
import {StyleSheet, Text, View, Linking, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';
import Button from '../components/Button';
import Title from '../components/Title';

const Detail = ({route}) => {
  const {job} = route.params;

  const handlePressToURL = useCallback(async () => {
    const supported = await Linking.canOpenURL(job.refs.landing_page);
    if (supported) {
      await Linking.openURL(job.refs.landing_page);
    } else {
      Alert.alert(`Don't know how to open this URL: ${job.refs.landing_page}`);
    }
  }, [job.refs.landing_page]);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{job.name}</Text>
      <Title titleName="Locations" titleDesc={job.locations[0].name} />
      <Title titleName="Job Level" titleDesc={job.levels[0].name} />
      <Text style={styles.detailsTitle}>Job Detail</Text>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${job.contents}</body></html>`,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" icon="share" onPress={handlePressToURL} />
        <Button
          title="Favorite Job"
          icon="heart"
          onPress={() =>
            dispatch({
              type: 'ADD_FAVORITE',
              payload: {favoriteJob: job},
            })
          }
        />
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
