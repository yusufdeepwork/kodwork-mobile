import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import JobCard from '../components/JobCard';

const Favorites = ({navigation}) => {
  const jobList = useSelector(s => s.favoriteJobList);
  const renderFavorites = ({item}) => (
    <JobCard job={item} navigation={navigation} />
  );
  return (
    <View>
      {jobList && <FlatList data={jobList} renderItem={renderFavorites} />}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
