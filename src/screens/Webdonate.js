/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {Alert} from 'react-native';
export default class Webdonate extends Component {
  render() {
    Alert.alert(
      'FLUTTERWAVE',
      'BE PATIENT WHILE WE REDIRECT YOU TO A SECURE PAYMENT GATEWAY',
    );
    return (
      <WebView
        source={{uri: 'https://rave.flutterwave.com/donate/kwtmzsddjoei'}}>
        style = {{marginTop: 10}}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        startInLoadingState = {true}
      </WebView>
    );
  }
}
