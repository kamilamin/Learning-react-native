/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TextInput,
  Keyboard
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: ''
    }
  }

  saveData = () => {
    const { fname, lname } = this.state;
    
    // Save Data in AsyncStorage 
    let myArr = {
      fname: fname,
      lname: lname
    }

    AsyncStorage.setItem('myArr', JSON.stringify(myArr));

    Keyboard.dismiss();
    alert(fname + " " + lname + 'Data is save in localStorage Successfully');
  }

  getData = async () => {
    let myArray = await AsyncStorage.getItem('myArr');
    let data = JSON.parse(myArray);
    alert(data.fname + '  ' + data.lname);
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            onChangeText={fname=> this.setState({fname})}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            onChangeText={lname=> this.setState({lname})}
          />
          <Button 
            title="Save Data"
            onPress={this.saveData}
            color= 'green'
          />
          <View style={styles.getButton}>
            <Button
              title="Get Data"
              onPress={this.getData}
              color= 'blue'
            />
          </View>
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
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  getButton: {
    marginTop: 5
  }
});
