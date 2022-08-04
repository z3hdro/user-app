import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {STRING_PACK} from '../../../constants/StringPack';

const ErrorPage = React.memo((): JSX.Element => {
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorText}>{STRING_PACK.USER_ERROR}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  errorBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  },
});

export default ErrorPage;
