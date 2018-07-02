/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput
} from 'react-native';


export default class App extends Component {

  saveData = () => {
    alert("Data is Save")
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="First Name"
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
          />
          <Button 
            title="Save Data"
            onPress={this.saveData}
            color="green"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10
  }
});
