import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import WelcomeScreen from '../screens/WelcomeScreen';
import FirstSurvey from '../screens/FirstSurvey';
import SecondSurvey from '../screens/SecondSurvey';
import Dashboard from '../screens/DashBoard';
import Donate from '../screens/Donate';
import Team from '../screens/Team';
import About from '../screens/About';
import Webdonate from '../screens/Webdonate';
import Form from '../screens/Form';
export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} />
          <Scene
            key="firstSurvey"
            component={FirstSurvey}
            title="FirstSurvey"
            hideNavBar={true}
          />
          <Scene
            key="secondSurvey"
            component={SecondSurvey}
            title="SecondSurvey"
            hideNavBar={true}
          />
          <Scene
            key="dashboard"
            component={Dashboard}
            title="Dashboard"
            hideNavBar={true}
          />
          <Scene
            key="donate"
            component={Donate}
            title="Donate"
            hideNavBar={false}
          />
          <Scene key="team" component={Team} title="Team" hideNavBar={false} />
          <Scene
            key="about"
            component={About}
            title="About"
            hideNavBar={false}
          />
          <Scene
            key="webdonate"
            component={Webdonate}
            title="webdonate"
            hideNavBar={false}
          />
          <Scene key="form" component={Form} title="form" hideNavBar={false} />
        </Stack>
      </Router>
    );
  }
}
