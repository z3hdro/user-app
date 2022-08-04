import React, {FC, useCallback, useEffect} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TYPES} from '../../redux/constants';
import {State} from '../../redux/types';
import {getRandomInt} from './helpers';
import {IndexScreenProps} from '../../navigation/types';
import {STRING_PACK} from '../../constants/StringPack';

const IndexScreen: FC<IndexScreenProps> = ({navigation}): JSX.Element => {
  const dispatch = useDispatch();
  const {users, error} = useSelector((state: State) => state);

  useEffect(() => {
    dispatch({type: TYPES.USERS_FETCH_REQUESTED});
  }, [dispatch]);

  const onUsersListPress = useCallback((): void => {
    navigation.navigate('UsersListScreen');
  }, [navigation]);

  const onRandomizeUser = (): void => {
    let user = null;
    if (users.length > 0) {
      const randomInt = getRandomInt(users.length);
      user = users[randomInt];
    }
    navigation.navigate('UserScreen', {user});
  };

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{STRING_PACK.FETCH_ERROR}</Text>
        </View>
      )}
      <View>
        <View style={styles.button}>
          <Button
            onPress={onUsersListPress}
            color={'pink'}
            title={'Users list'}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={onRandomizeUser}
            color={'pink'}
            title={'Randomize user'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    marginVertical: 20,
  },
  errorBox: {
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default IndexScreen;
