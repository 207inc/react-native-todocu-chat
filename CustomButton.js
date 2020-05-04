import React, { Component } from 'react';
import {AsyncStorage, StyleSheet, View, ScrollView, FlatList, TouchableOpacity, Image, RefreshControl, Alert, TouchableHighlight} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Button, ListItem, CheckBox, Item, Input, Label } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
// import AppIntro from 'react-native-app-intro';

import Swiper from 'react-native-swiper';
import RNRestart from 'react-native-restart'; // Import package from node modules
import ElevatedView from 'react-native-elevated-view'

export default class CustomButton extends Component {
  componentDidMount() {
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  render() {
    let disabled = this.props.disabled;

    return (
      <ElevatedView style={this.props.style} elevation={16}>
        <Button disabled={disabled} onPress={() => this.props.onPress()} rounded
          style={[disabled ? styles.lineButtonDisabled : styles.lineButton, this.props.buttonStyle]}>
          <Text style={styles.lineButtonText}>{this.props.text}</Text></Button>
      </ElevatedView>
    );
  }
}

const styles = StyleSheet.create({
  lineButton: {
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 32,
    backgroundColor: '#0157F8',
    width: '100%',
  },
  lineButtonDisabled: {
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 32,
    backgroundColor: '#aaa',
    width: '100%',
  },
  lineButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  }
})
