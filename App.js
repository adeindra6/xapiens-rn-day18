import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  TaskScreen,
} from '@screens';
import AuthProvider from '@contexts/auth';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <>
      <NavigationContainer>
        <AuthProvider>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: 'indigo',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: 'indigo',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}              
            />
            <Drawer.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                title: 'Register',
                headerStyle: {
                  backgroundColor: 'indigo',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Task"
              component={TaskScreen}
              options={{
                title: 'Task',
                headerStyle: {
                  backgroundColor: 'indigo',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Drawer.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;