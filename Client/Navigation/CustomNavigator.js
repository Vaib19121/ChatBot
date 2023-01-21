import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from '../Screens/Chat';
import ConfigurationScreen from '../Screens/ConfigurationScreen';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();
export default function CustomNavigator() {
  const {darkMode} = useSelector(store => store.config);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: darkMode ? '#252d3b' : 'white'},
          headerTitleStyle: {color: darkMode ? 'white' : '#181818'},
          drawerStyle: {backgroundColor: darkMode ? '#181818' : '#fff'},
          drawerActiveTintColor:'rgb(0,122,255)',
          drawerActiveBackgroundColor: darkMode ? '#252d3b' : 'rgba(0,122,255,0.12)',
          drawerInactiveTintColor: darkMode ? 'rgb(145,145,142)' : '#181818',
          drawerInactiveBackgroundColor: darkMode ? '#181818' : '#fff',
        }}>
        <Drawer.Screen
          name="Home"
          component={Chat}
          options={{headerTitleAlign: 'center'}}
        />
        <Drawer.Screen
          name="Configuration"
          component={ConfigurationScreen}
          options={{headerTitleAlign: 'center'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
