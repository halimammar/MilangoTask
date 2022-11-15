import React from 'react';
import {Props} from '../../Explore/components/ItemCard';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {kFormatter} from '../../../utils/formatNumber';
const RepoCard = ({item}: Props) => {
  return (
    <View style={styles.card}>
      {item.owner.avatar_url && (
        <Image style={styles.repoImage} source={{uri: item.owner.avatar_url}} />
      )}
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Icon
            size={22}
            color={'#c5d9ed'}
            style={styles.image}
            name="book-multiple-outline"
          />
          <Text style={styles.title}>{item.full_name}</Text>
        </View>
        <Text>{item.description}</Text>
        <View style={styles.update}>
          <Text>{item.language}</Text>
          <View style={styles.star}>
            <Icon size={18} style={styles.image} name="star-outline" />
            <Text>{kFormatter(item.stargazers_count)}</Text>
          </View>
          <Icon size={18} style={styles.image} name="source-branch" />
          <Text>{item.forks_count}</Text>
        </View>
      </View>
    </View>
  );
};
export default RepoCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.58,
    shadowRadius: 15,

    elevation: 22,
  },
  container: {
    padding: 20,
  },
  trendTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trend: {
    color: '#aaa',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  starRate: {
    backgroundColor: '#c5d9ed',
    borderRadius: 5,
    padding: 5,
    marginLeft: 8,
  },

  image: {
    width: 20,
    height: 20,
  },
  titleBar: {
    flexDirection: 'row',
    marginVertical: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'blue',
    marginLeft: 10,
  },
  update: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#c5d9ed',
    borderTopWidth: 1,
    paddingTop: 20,
  },
  repoImage: {
    height: 200,
  },
});
