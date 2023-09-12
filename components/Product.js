import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/action';

const Product = props => {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  let id = props.item.id;
  return (
    <View style={styles.itemContainer} key={id}>
      <View>
        <Image
          source={{uri: props.item.img}}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {props.item.name}
        </Text>
        <Text style={{fontSize: 15}}>Colour: {props.item.color}</Text>
        <Text style={{fontSize: 15, marginBottom: 5}}>₹{props.item.price}</Text>
        <Button
          title="ADD TO CART"
          onPress={() => handleAddToCart(props.item)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b6dce3',
    elevation: 5,
  },
});

export default Product;
