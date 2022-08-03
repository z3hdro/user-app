import React, {FC} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {UserCard} from '../../components/UserCard';
import ErrorPage from './parts/ErrorPage';

const UserScreen: FC<any> = ({navigation, route}): JSX.Element => {
  const {user} = route.params;

  const onReturn = (): void => {
    navigation.goBack();
  };

  const renderContent = (): JSX.Element => {
    if (user) {
      return (
        <View style={styles.user}>
          <UserCard item={user} />
        </View>
      );
    } else {
      return <ErrorPage />;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <View style={styles.button}>
        <Button onPress={onReturn} color={'pink'} title={'Back'} />
      </View>
    </View>
  );
};

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
