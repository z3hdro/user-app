import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ErrorPage = (): JSX.Element => {
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorText}>Sorry, user not found!</Text>
    </View>
  );
};

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
