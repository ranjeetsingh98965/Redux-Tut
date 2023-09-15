import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserList = () => {
  return (
    <View style={styles.cont}>
      <Text>User List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 100,
  },
});

export default UserList;
