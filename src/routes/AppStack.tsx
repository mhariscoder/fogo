import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1'; // Import screen

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  );
}

export default AppStack;
