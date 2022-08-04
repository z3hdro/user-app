import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import {UserCard} from '../../components/UserCard';
import BottomButtons from './parts/BottomButtons';
import {useSelector} from 'react-redux';
import {State} from '../../redux/types';
import {User} from '../../types';
import {UsersListScreenProps} from '../../navigation/types';

const UsersListScreen: FC<UsersListScreenProps> = ({
  navigation,
}): JSX.Element => {
  const users = useSelector((state: State) => state.users);
  const [displayOrangeColor, setDisplayOrangeColor] = useState<boolean>(false);
  const [data, setData] = useState<User[] | []>(users);
  const [query, setQuery] = useState<string>('');

  const onSearch = (text: string) => {
    setQuery(text);
    if (text.trim() === '') {
      setData(users);
    } else {
      const result = users.filter((user: User) => {
        const searchText = text.toLowerCase();
        return (
          user.firstName.toLowerCase().indexOf(searchText) !== -1 ||
          user.address.city.toLowerCase().indexOf(searchText) !== -1
        );
      });
      setData(result);
    }
  };

  const onChangeToOrange = (): void => {
    setDisplayOrangeColor(!displayOrangeColor);
  };

  const onReturn = useCallback((): void => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = ({item}: {item: User}): JSX.Element => {
    const onSelectUser = () => {
      navigation.navigate('UserScreen', {user: item});
    };

    return (
      <UserCard
        item={item}
        onPress={onSelectUser}
        style={{backgroundColor: displayOrangeColor ? 'orange' : 'transparent'}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onSearch}
          value={query}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={user => user.email}
          extraData={displayOrangeColor}
        />
      </View>
      <BottomButtons
        firstButtonTitle={'Change color'}
        onFirstButtonPress={onChangeToOrange}
        secondButtonTitle={'Back'}
        onSecondButtonPress={onReturn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchBox: {
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
  list: {
    flex: 1,
    width: '100%',
  },
});

export default UsersListScreen;
