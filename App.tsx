import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import AppNavigator from './src/routes/Index'; // Import your app's main navigator



function App(): React.JSX.Element {
  return (
    <>
      <AppNavigator /> 
    </>
    
  );
}

export default App;
