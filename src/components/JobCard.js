import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const JobCard = ({job, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Detail', {
          name: job.name,
          contents: job.contents,
          level: job.levels[0].name,
          location: job.locations[0].name,
          jobSite: job.refs.landing_page,
        })
      }>
      <Text style={styles.name}>{job.name}</Text>
      <Text style={styles.sprinklr}>Sprinklr</Text>
      <Text allowFontScaling={false} style={styles.location}>
        {job.locations.map(loc => loc.name)}
      </Text>
      <Text style={styles.level}> {job.levels[0].name} </Text>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sprinklr: {
    fontSize: 17,
  },
  location: {
    backgroundColor: '#ef5350',
    color: 'white',
    borderRadius: 15,
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: 7,
    marginTop: 3,
    marginBottom: 3,
    alignSelf: 'flex-start',
  },
  level: {
    textAlign: 'right',
    fontSize: 18,
    color: '#ef5350',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
