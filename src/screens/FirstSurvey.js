/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
export default class FirstSurvey extends Component {
  render() {
    Alert.alert(
      'QUICK SURVEY',
      'HOW DOES THE BACKGROUND PICTURE MAKE YOU FEEL',
    );
    return (
      <ImageBackground
        source={require('../images/secondtest.jpg')}
        style={styles.backgroungImage}>
        <Logo />
        <Text style={styles.description}>HOW DOES THIS MAKE YOU FEEL ?</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Actions.secondSurvey()}>
          <Text> COMFORTABLE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => Actions.secondSurvey()}>
          <Text> UNCOMFORTABLE </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroungImage: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 50,
    marginLeft: 60,
    backgroundColor: 'green',
  },
  buttonContainer2: {
    marginTop: 40,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 50,
    marginLeft: 60,
    backgroundColor: 'red',
  },
});
