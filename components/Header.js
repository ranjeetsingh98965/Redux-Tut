import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  console.log(cartData);

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
    elevation: 5,
  },
  txt: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
