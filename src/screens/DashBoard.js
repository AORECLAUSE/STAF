/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Dashboard extends Component {
  render() {
    Alert.alert('QUICK SURVEY', 'THANK YOU FOR YOUR FEEDBACK');
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroungImage}
          source={require('../images/burningamazon.jpg')}>
          <View style={styles.headerContent}>
            <Image
              style={styles.logo}
              source={require('../images/logostaf.jpg')}
            />
            <Text style={styles.staf}> STAF </Text>
            <Text style={styles.name}> #SAVE THE AMAZON RAIN FOREST </Text>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.donate()}>
              <Image
                style={styles.icon}
                source={require('../images/donate.png')}
              />
              <Text style={styles.info}> DONATE </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.form()}>
              <Image
                style={styles.icon}
                source={require('../images/volunteer.png')}
              />
              <Text style={styles.info}> VOLUNTEER </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.team()}>
              <Image
                style={styles.icon}
                source={require('../images/team.png')}
              />
              <Text style={styles.info}> TEAM </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.about()}>
              <Image
                style={styles.icon}
                source={require('../images/aboutus.png')}
              />
              <Text style={styles.info}> ABOUT </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: '80%',
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    marginLeft: 70,
    backgroundColor: 'green',
  },
  staf: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 70,
    backgroundColor: 'green',
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  bodyContent: {
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 20,
    color: 'white',
  },
  backgroungImage: {},
  opaque: {
    color: 'red',
  },
});
//#DCDCDC#696969
