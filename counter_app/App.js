import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
    this.state.customStyle = {
      color: 'white'
    }
    setInterval(() => {
      if(this.state.customStyle.color == 'white'){
        this.setState({
          customStyle: {
            color: 'black'
          }
        })
      } else {
        this.setState({
          customStyle: {
            color: 'white'
          }
        })
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text>This is half 1/1</Text>
          <Text style={this.state.customStyle}>Hello World</Text>
        </View>
        <View style={styles.half2}>
          <View style={[styles.half21, styles.half2x]}>
            <Text>This is half 2/1</Text>
            <Text style={this.state.customStyle}>Hello World</Text>
          </View>
          <View style={[styles.half22, styles.half2x]}>
            <Text>This is half 2/2</Text>
            <Text style={this.state.customStyle}>Hello World</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  half2x: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  half21: {
    backgroundColor: 'blue'
  },
  half22: {
    backgroundColor: 'yellow'
  }
});
