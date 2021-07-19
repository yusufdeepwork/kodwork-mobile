import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import JobCard from '../components/JobCard';

const Favorites = ({navigation}) => {
  const jobList = useSelector(s => s.favoriteJobList);
  const dispatch = useDispatch();
  const renderFavorites = ({item}) => (
    <JobCard
      job={item}
      navigation={navigation}
      isFavorite
      onPress={() =>
        dispatch({type: 'REMOVE_FAVORITE', payload: {id: item.id}})
      }
    />
  );
  return (
    <View>
      {jobList && <FlatList data={jobList} renderItem={renderFavorites} />}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
