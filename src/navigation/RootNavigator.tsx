import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IndexScreen} from '../screens/IndexScreen';
import {UsersListScreen} from '../screens/UsersListScreen';
import {UserScreen} from '../screens/UserScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IndexScreen" component={IndexScreen} />
      <Stack.Screen name="UsersListScreen" component={UsersListScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
