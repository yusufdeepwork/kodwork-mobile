import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function Jobs() {
  const [jobList, setjobList] = useState();
  const jobsUrl = 'https://www.themuse.com/api/public/jobs?page=1';

  const fetchJobs = async () => {
    try {
      const {data} = await axios.get(jobsUrl);
      console.log(data.results);
      setjobList(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jobList}
        renderItem={({item}) => <JobCard job={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  name: {
    margin: 10,
    color: 'green',
  },
});
