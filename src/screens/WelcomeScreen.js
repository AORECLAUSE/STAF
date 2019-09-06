import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
export default class WelcomeScreen extends Component {
    render() {
        return ( <
            ImageBackground source = { require('../images/welcomebackground.jpg') }
            style = { styles.backgroungImage } >
            <
            Logo / >
            <
            Text style = { styles.welcomeName } > STAF < /Text> <
            View style = { styles.whatWeDo } >
            <
            Text style = { styles.Cpm } > Create Protect Maintain < /Text> <
            /View> <
            Text style = { styles.nature } > NATURE < /Text> <
            TouchableOpacity style = { styles.button }
            onPress = {
                () => Actions.firstSurvey() } >
            <
            Text style = { styles.buttonText } > WELCOME < /Text> <
            /TouchableOpacity> <
            /ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    app: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroungImage: {
        width: '100%',
        height: '100%',
    },
    button: {
        width: 200,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'green',
        borderRadius: 50,
        marginVertical: 70,
        marginLeft: 80,
        padding: 10,
        textShadowRadius: 10,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    welcomeName: {
        marginVertical: 15,
        fontSize: 50,
        color: 'white',
        fontFamily: 'Roboto',
        marginLeft: 130,
    },
    whatWeDo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Cpm: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
    },
    nature: {
        color: 'white',
        fontSize: 25,
        fontStyle: 'italic',
        marginLeft: 140,
    },
});