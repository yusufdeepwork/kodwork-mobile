import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import JobCard from '../components/JobCard';

const Favorites = () => {
  const renderFavorites = () => <JobCard job={null} navigation={null} />;
  return (
    <View>
      <FlatList data={[]} renderItem={renderFavorites} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
