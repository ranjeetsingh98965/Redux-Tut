import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.cart}>
      <Text style={styles.txt}>Cart: 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    elevation: 10,
  },
  txt: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
