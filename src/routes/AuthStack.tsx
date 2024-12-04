import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from '../screens/Screen2';
import Screen1 from '../screens/Screen1';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <></>
    // <Stack.Navigator initialRouteName="Screen3">
    //   <Stack.Screen name="Screen1" component={Screen1} />
    //   <Stack.Screen name="Screen2" component={Screen2} />
    //   <Stack.Screen name="Screen3" component={Screen3} />
    // </Stack.Navigator>
  );
}

export default AuthStack;