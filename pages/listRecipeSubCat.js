import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Receptai from '../Receptai.json';

import HomeScreen from './home.js';

import listRecipeCategory from './listRecipecategories.js';

function ListScreen ({navigation}) {
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home', {HomeScreen})}
          />
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
      </View>
      );
    }
  
export default ListScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });