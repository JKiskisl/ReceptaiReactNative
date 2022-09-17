import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receptai from './Receptai.json';


function VegetariskiScreen({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Button title="Go to home" onPress={()=>navigation.navigate('Home')}/>
      <Button title="Go back" onPress={()=> navigation.goBack()}/>
    </View>
  )
}

function MesosScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to home" onPress={()=> navigation.navigate('Home')}/>
      <Button title="Go back" onPress={()=> navigation.goBack()}/>
    </View>
  )
}

function SriubosScreen({navigation}) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        {Receptai.Sriuba.map((item)=>(
          <View>
            <Button title={item.name} onPress={()=>{Alert.alert(item.paruosimas)}}/>
          </View>
        ))}

      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
       title="Sriubos"
       onPress={() => {
         navigation.navigate('Sriubos')
       }}/>
       <Button 
        title="Mesos receptai"
        onPress={()=>{
          navigation.navigate('Mesa')
        }}/>
        <Button
        title="Vegetariski receptai"
        onPress={()=>{
          navigation.navigate('Vegetariski')
        }}/>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Sriubos" component={SriubosScreen} />
        <Stack.Screen name="Mesa" component={MesosScreen} />
        <Stack.Screen name="Vegetariski" component={VegetariskiScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
