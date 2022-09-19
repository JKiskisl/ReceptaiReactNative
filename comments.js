import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receptai from './Receptai.json';
import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (value) => {
    try{
        await AsyncStorage.setItem('@storage_key', value)
    }
    catch(e){
        console.log(e)
    }
}
