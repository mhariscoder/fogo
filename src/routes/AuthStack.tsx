import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from '../screens/Screen2';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Screen2">
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

export default AuthStack;