import {ViewStyle} from 'react-native';
import {User} from '../../../types';

export interface UserCardProps {
  item: User;
  onPress?: () => void;
  style?: ViewStyle;
}
