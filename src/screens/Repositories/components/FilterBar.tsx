import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import moment from 'moment';
const screenWidth = Dimensions.get('window').width;

interface Props {
  setLang: (item: string) => void;
  languages: string[];
}

const FilterBar = ({setLang, languages}: Props) => {
  return (
    <View style={styles.containerBar}>
      <SelectDropdown
        onSelect={setLang}
        buttonTextAfterSelection={selectedItem => `Language : ${selectedItem}`}
        rowTextForSelection={item => item}
        data={languages}
        buttonStyle={styles.buttonStyle}
        dropdownStyle={styles.dropdownStyle}
      />
      <Pressable style={styles.date}>
        <Text style={styles.dateTitle}>Date :</Text>
        <Text style={styles.dateTitle}>{moment().format('D MMM YY')}</Text>
      </Pressable>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  containerBar: {
    flexDirection: 'row',
  },
  dateTitle: {
    fontSize: 18,
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: 16,
    borderRadius: 10,
    marginLeft: 6,
  },
  buttonStyle: {
    borderRadius: 10,
    marginVertical: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.58,
    shadowRadius: 15,
    elevation: 22,
  },
  dropdownStyle: {
    width: screenWidth - 40,
    borderRadius: 15,
  },
});
