import React, {FC, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Header: FC<any> = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearch(text)}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default Header;
