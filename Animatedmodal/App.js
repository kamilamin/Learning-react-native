/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isModelVisible: false,
      isSecondModal: false
    };
  }
  _toggleModel = () => {
    this.setState({ isModelVisible: !this.state.isModelVisible });
  };
  _toggleSecondModel = () => {
    this.setState({
      isSecondModal: !this.state.isSecondModal
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 10, padding: 10 }}>
          <TouchableOpacity onPress={this._toggleModel}>
            <Text>Show Modal</Text>
          </TouchableOpacity>
        </View>
        {this.state.isModelVisible && !this.state.isSecondModal ? (
          <Modal isVisible={this.state.isModelVisible}>
            <View style={{ backgroundColor: "#fff" }}>
              <View
                style={{ margin: 10, padding: 10, backgroundColor: "grey" }}
              >
                <Text>Hello From Modal</Text>
              </View>
              <View style={{ margin: 10, padding: 10 }}>
                <TouchableOpacity onPress={this._toggleModel}>
                  <Text>Hide Me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : (
          <Modal isVisible={this.state.isSecondModal}>
            <View style={{ backgroundColor: "#fff" }}>
              <View
                style={{ margin: 10, padding: 10, backgroundColor: "grey" }}
              >
                <Text>Hello from Second Modal</Text>
              </View>
              <View style={{ margin: 10, padding: 10 }}>
                <TouchableOpacity onPress={this._toggleSecondModel}>
                  <Text>Hide Me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
