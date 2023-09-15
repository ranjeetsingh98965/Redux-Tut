import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.cart}>
      <Text style={styles.txt}>Cart: {cartItems}</Text>
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
    zIndex: 99,
  },
  txt: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
