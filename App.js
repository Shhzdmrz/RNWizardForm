import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';

import Wizard from './wizard';

class App extends Component {
    handleSubmitWizard = () => {
      Alert.alert('Wizard has been submitted');
    }
  
    render() {
      const steps = [
        { component: View, routeName: 'Step1' },
        { component: View, routeName: 'Step2' },
        { component: View, routeName: 'Step3' },
      ];
      return (
        <Wizard
          handleSubmitWizard={this.handleSubmitWizard}
          steps={steps}
          title='Basic Wizard Example'
        />
      );
    }
};


export default App;
