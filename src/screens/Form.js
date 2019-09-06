import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  Linking,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/Logo';
export default class Form extends Component {
  buttonClickded = () => {
    Alert.alert(
      'THANK TOU',
      'WE WILL GET BACK TO YOU SHORTLY. WOULD YOU LOVE TO VISIT OUR WEBSITE',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => Linking.openURL('http://staffng.000webhostapp.com/'),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo style={styles.Logo} />{' '}
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="white"
            placeholder="Name"
            fontStyle="italic"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="white"
            placeholder="Email"
            fontStyle="italic"
          />
          <TextInput
            style={styles.inputBox}
            placeholder="ROLE/S"
            fontStyle="italic"
          />
          <TouchableOpacity style={styles.button} onPress={this.buttonClickded}>
            <Text style={styles.buttonText}> VOLUNTEER </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {},
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 30,
    flexDirection: 'row',
  },
  signupText: {
    color: 'white',
    fontSize: 15,
  },
  signupButton: {
    color: 'green',
    fontWeight: '500',
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: 300,
    backgroundColor: 'green',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  inputBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 15,
    color: 'black',
    marginVertical: 10,
  },
});
