import React, {FC} from 'react';
import {UserCardProps} from './types';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const UserCard: FC<UserCardProps> = ({
  item: user,
  onPress = () => {},
  style = {},
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.pictureBox}>
        <Image style={styles.picture} source={{uri: user.picture.medium}} />
      </View>
      <View>
        <View style={styles.infoBox}>
          <Text>{`${user?.name?.first} ${user?.name?.last}`}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>{user?.email}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>{user?.location?.city}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
  },
  pictureBox: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  infoBox: {
    marginTop: 8,
  },
});

export default UserCard;
