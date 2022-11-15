import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import {Item} from '../../types';
import RepoCard from './components/ItemCard';
import useFetchRepos from '../../hooks/useRepositories';
import SelectDropdown from 'react-native-select-dropdown';
import {View} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const options = [10, 50, 100];

const Explore = () => {
  const [perPage, setPerPage] = useState(options[0]);

  const {data, error, isLoading} = useFetchRepos({perPage});

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <RepoCard item={item} />;
  }

  return (
    <View style={{padding: 20}}>
      <>
        {error && <Text>Something went wrong , please try again</Text>}

        <Text style={styles.exploreTitle}>Explore popular</Text>
        <SelectDropdown
          data={options}
          onSelect={selectedItem => setPerPage(selectedItem)}
          buttonTextAfterSelection={selectedItem => `View : ${selectedItem}`}
          rowTextForSelection={item => item}
          buttonStyle={styles.dropDownButton}
          dropdownStyle={styles.dropdownStyle}
        />
        {isLoading && <ActivityIndicator size={'large'} />}
        <FlatList
          data={data?.items || []}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  exploreTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 20,
  },
  dropDownButton: {
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.58,
    shadowRadius: 15,
    elevation: 22,
  },
  dropdownStyle: {
    width: screenWidth - 40,
    borderRadius: 15,
  },
  list: {
    paddingBottom: 80,
  },
});
