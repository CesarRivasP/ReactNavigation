/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/home';
import About from './src/screens/about';
import Login from './src/screens/login';
import Profile from './src/screens/profile';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Login: {
    screen: Login
  },
  Profile: {
    screen: Profile
  }
})

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
