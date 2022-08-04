import React, {FC, useCallback} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {UserCard} from '../../components/UserCard';
import ErrorPage from './parts/ErrorPage';
import {UserScreenProps} from '../../navigation/types';

const UserScreen: FC<UserScreenProps> = React.memo(
  ({navigation, route}): JSX.Element => {
    const {user} = route.params;

    const onReturn = useCallback((): void => {
      navigation.goBack();
    }, [navigation]);

    return (
      <View style={styles.container}>
        {user ? (
          <View style={styles.user}>
            <UserCard item={user} />
          </View>
        ) : (
          <ErrorPage />
        )}
        <View style={styles.button}>
          <Button onPress={onReturn} color={'pink'} title={'Back'} />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  user: {
    width: '100%',
  },
  button: {
    width: 150,
    marginTop: 20,
  },
});

export default UserScreen;
