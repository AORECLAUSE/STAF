/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.backgroungImage}
            source={require('../images/newamazon.jpg')}>
            <View style={styles.profileCard}>
              <Text style={styles.name1}>
                Join our fight to protect the greatest wild forest on Earth!
              </Text>
              <Text style={styles.name}>
                Protecting the Amazon means safeguarding millions of species of
                animals, plants, and insects who call it home.It means allowing
                indigenous communities and locals whose livelihoods depend on
                the forest to thrive.It means stabilizing our planet 's climate
                and protecting 20 % of the oxygen production of our world.It
                means a lot.
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.card}>
            <Text style={styles.cardTittle}> DONATE </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Actions.webdonate()}>
              <Text style={styles.buttonText}> DONATE </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <Text style={styles.cardTittle}> SPONSORS </Text>
            <Image
              style={styles.sponsors}
              source={require('../images/flutterwavelogo.png')}
            />
            <Image
              style={styles.sponsors}
              source={require('../images/hnglogo.png')}
            />
          </View>
          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}> Photos </Text>
            <View style={styles.photosContainer}>
              <Image
                style={styles.photo}
                source={require('../images/burningamazon.jpg')}
              />
              <Image
                style={styles.photo}
                source={require('../images/burningamazo.jpg')}
              />
              <Image
                style={styles.photo}
                source={require('../images/burningamaz.jpg')}
              />
              <Image
                style={styles.photo}
                source={require('../images/burningama.jpg')}
              />
              <Image
                style={styles.photo}
                source={require('../images/burningam.jpg')}
              />
              <Image
                style={styles.photo}
                source={require('../images/burninga.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DCDCDC',
  },
  cardTittle: {
    color: '#808080',
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginTop: 10,
    justifyContent: 'center',
  },
  button: {
    width: 200,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 50,
    textShadowRadius: 10,
    backgroundColor: 'green',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  card1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height: 150,
    marginTop: 10,
  },
  profileCard: {
    height: 200,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
  },
  name1: {
    fontSize: 20,
    color: 'white',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    justifyContent: 'center',
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 100,
    height: 113,
    marginTop: 5,
    marginRight: 5,
  },
  sponsors: {},
  backgroungImage: {
    borderRadius: 10,
    padding: 10,
  },
});
