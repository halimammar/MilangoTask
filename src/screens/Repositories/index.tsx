import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RepoCard from './components/RepoCard';
import {Item} from '../../types';
import FilterBar from './components/FilterBar';
import useFetchRepos from '../../hooks/useRepositories';

const languages = [
  'Java',
  'Ruby',
  'HTML',
  'Python',
  'PHP',
  'Go',
  'XML',
  'C++',
  'JavaScript',
];
const Repositories = () => {
  const [lang, setLang] = useState('');

  const {data, error, isLoading} = useFetchRepos({lang});

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <RepoCard item={item} />;
  }

  return (
    <View style={{padding: 20}}>
      <>
        <Text style={styles.exploreTitle}>Repositories</Text>

        {error && <Text>Something went wrong , please try again</Text>}
        <FilterBar setLang={setLang} languages={languages} />
        {isLoading && <ActivityIndicator size={'large'} />}
        <FlatList data={data?.items || []} renderItem={renderItem} />
      </>
    </View>
  );
};

export default Repositories;

const styles = StyleSheet.create({
  exploreTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 20,
  },
});
