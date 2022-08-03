import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from './parts/Header';
import BottomButtons from './parts/BottomButtons';
import {useSelector} from 'react-redux';
import {State} from '../../redux/types';
import {UserCard} from '../../components/UserCard';

const UsersListScreen: FC<any> = ({navigation}): JSX.Element => {
  const data = useSelector((state: State) => state.users);
  const [displayOrangeColor, setDisplayOrangeColor] = useState<boolean>(false);

  const onChangeToOrange = (): void => {
    setDisplayOrangeColor(!displayOrangeColor);
  };

  const onReturn = useCallback((): void => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = ({item}: any): JSX.Element => {
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
      <Header />
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
  list: {
    flex: 1,
    width: '100%',
  },
});

export default UsersListScreen;
