import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {User} from '../../types';

export type RootStackParamList = {
  IndexScreen: undefined;
  UsersListScreen: undefined;
  UserScreen: {
    user: User | null;
  };
};

export type IndexScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'IndexScreen'
>;
export type UsersListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UsersListScreen'
>;
export type UserScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UserScreen'
>;
