import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import Product from './Product';
const ProductWrapper = ({navigation}) => {
  const products = [
    {
      name: 'SAMSUNG',
      color: 'White',
      price: 30000,
      img: 'https://media.croma.com/image/upload/v1662441850/Croma%20Assets/Communication/Mobiles/Images/249622_tx6vym.png',
      id: 1,
    },
    {
      name: 'Realme',
      color: 'Black',
      price: 20000,
      img: 'https://image01.realme.net/general/20230512/1683873836923.png?width=1440&height=1440&size=544990',
      id: 2,
    },
    {
      name: 'Iphone',
      color: 'Gold',
      price: 150000,
      img: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/S/E/67343_1663482037.jpg',
      id: 3,
    },
    {
      name: 'ASUS',
      color: 'Black',
      price: 50000,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQem6_qbVLUt1pbzyyEsQwv_Wb1C0I-mLt-RGQjMGQ_MyI1dKJYyxqY5stpFie_Hn0U3NU&usqp=CAU',
      id: 4,
    },
  ];

  return (
    <>
      <View style={styles.appBar}>
        <Text style={styles.txt}>UI of Add to Cart with Redux</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.userListBtn}
          onPress={() => {
            console.warn('Hello');
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>User List</Text>
        </TouchableOpacity>
        {/* <Button
          title="User List"
          onPress={() => {
            console.warn('hello');
          }}
        /> */}
        <Header />
        <ScrollView>
          <View>
            {products.map(item => (
              <Product item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  txt: {
    color: '#fff',
    fontSize: 25,
  },
  body: {
    flex: 1,
  },
  userListBtn: {
    backgroundColor: 'dodgerblue',
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    left: 20,
    elevation: 5,
    zIndex: 100,
  },
});

export default ProductWrapper;
