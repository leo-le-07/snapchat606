import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './src/AppContainer'

// For network debugging
// global.XMLHttpRequest = global.originalXMLHttpRequest
//   ? global.originalXMLHttpRequest
//   : global.XMLHttpRequest;
// global.FormData = global.originalFormData
//   ? global.originalFormData
//   : global.FormData;

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}
