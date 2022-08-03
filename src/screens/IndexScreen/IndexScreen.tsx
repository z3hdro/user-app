import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Types} from '../../redux/constants';
import {State} from '../../redux/types';
import {getRandomInt} from './helpers';

const IndexScreen: FC<any> = ({navigation}): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.users);

  useEffect(() => {
    dispatch({type: Types.USERS_FETCH_REQUESTED});
  }, [dispatch]);

  const onUsersListPress = (): void => {
    navigation.navigate('UsersListScreen');
  };

  const onRandomizeUser = (): void => {
    let user;
    if (data.length > 0) {
      const randomInt = getRandomInt(data.length);
      user = data[randomInt];
    } else {
      user = null;
    }
    navigation.navigate('UserScreen', {user});
  };

  return (
    <View style={styles.container}>
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
});

export default IndexScreen;
