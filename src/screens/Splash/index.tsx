import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tab');
    }, 2500);
  }, []);

  return (
    <View style={styles.continer}>
      <Image source={require('../../../picture/logo.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
