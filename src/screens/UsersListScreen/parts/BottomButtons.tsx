import React, {FC} from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
import {BottomButtonsProps} from '../types';

const WIDTH = Dimensions.get('window').width;

const BottomButtons: FC<BottomButtonsProps> = ({
  firstButtonTitle,
  onFirstButtonPress,
  secondButtonTitle,
  onSecondButtonPress,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button
          onPress={onFirstButtonPress}
          color={'pink'}
          title={firstButtonTitle}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={onSecondButtonPress}
          color={'pink'}
          title={secondButtonTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  button: {
    width: WIDTH * 0.4,
    marginHorizontal: 10,
  },
});

export default BottomButtons;
