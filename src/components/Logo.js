import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('../images/logostaf.jpg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});
