import React, {Component} from 'react';
import Routes from './src/Routes/Routes';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Form from './src/screens/Form'
console.disableYellowBox = true;
export default class HelloWorldApp extends Component {
  render() {
    return <Routes />;
  }
}
