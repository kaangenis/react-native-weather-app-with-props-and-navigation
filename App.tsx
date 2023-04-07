import { Text, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/components/Home'
import Settings from './src/components/Settings'

const Stack = createNativeStackNavigator()


export default class App extends Component {
  componentDidMount(): void {
    
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false}} initialRouteName='Home'>
          <Stack.Screen
            name = 'Home' 
            component={Home}/>
          <Stack.Screen name = 'Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}