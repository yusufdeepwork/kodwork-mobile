import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function Jobs() {
  const [jobList, setjobList] = useState();
  const jobsUrl = 'https://www.themuse.com/api/public/jobs?page=1';

  const [isLoading, setisLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const {data} = await axios.get(jobsUrl);
      setjobList(data.results);
      setisLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'#ef5350'} size={'large'} />
      ) : (
        <FlatList
          data={jobList}
          renderItem={({item}) => <JobCard job={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    margin: 10,
    color: 'green',
  },
});
