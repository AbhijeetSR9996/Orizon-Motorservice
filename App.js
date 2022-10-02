import * as React from 'react';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Anim4 from './screens/Anim4';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Anim4" component={Anim4} options={{ headerShown: false }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
        <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} />
        <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }} />
        <Stack.Screen name="Screen6" component={Screen6} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};