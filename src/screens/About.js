/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../images/logostaf.jpg')}
          />
          <Text style={styles.companyName}> STAF™ </Text>
          <Text style={styles.slogan}> SAVE THE AMAZON RAIN FOREST </Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.question}> What is STAF ? </Text>
            <Text style={styles.description}>
              Save The Amazon rainforest Foundation is a non - profit foundation
              which started as a task in the 2019 session of the StartNG Pre -
              internship Program sponsored by Flutterwave.
            </Text>
            <Text style={styles.question}>
              What distinguishes STAF from other rainforest organisations ?
            </Text>
            <Text style={styles.description}>
              STAF is exclusively focused on the Amazon Rainforest given its
              vital importance to global biological and environmental
              ecosystems.Also, it unleashes the power of collaboration and
              capacity building to create a template for rainforest conservation
              methods.
            </Text>
            <Text style={styles.question}> How does STAF fund itself ? </Text>
            <Text style={styles.description}>
              STAF being a non - profit is dependent on grants and funding from
              donors like the United Nations and consulting for governments and
              organisations with strong interests in environmental conservation
              and biological ecosystems.
            </Text>
            <Text style={styles.question}>
              Why should nature be preserved ?
            </Text>
            <Text style={styles.description}>
              Protecting the wildlife also means that you are preserving it for
              the future generations.It helps in promoting biodiversity for a
              healthy and functional ecosystem.We humans can also benefit from
              protecting wildlife because a lot of medicines can be derived from
              the chemicals produced by animals and plants.
            </Text>
            <Text style={styles.question}> Why should I join ? </Text>
            <Text style={styles.description}>
              STAF We are all protected and governed by nature.A healthy
              environment provides nutrients that flow up the food chain, from
              plants to animals, to provide energy.STAF gives you the
              opportunity to do just that.
            </Text>
            <Text style={styles.question}> How can I join STAF ? </Text>
            <Text style={styles.description}>
              Simply register on this platform and we will contact you
            </Text>
          </View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.sendButton]}
            onPress={() => Actions.pop()}>
            <Text style={styles.buttonText}> Done </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#228B22',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  companyName: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  descriptionContent: {
    padding: 30,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: 'green',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
