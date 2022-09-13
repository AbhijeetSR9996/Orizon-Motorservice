import * as React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import SplashPage from './pages/SplashPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage">
        <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }} />
        <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false }} />
        <Stack.Screen name="Page3" component={Page3} options={{ headerShown: false }} />
        <Stack.Screen name="Page4" component={Page4} options={{ headerShown: false }} />
        <Stack.Screen name="Page5" component={Page5} options={{ headerShown: false }} />
        <Stack.Screen name="Page6" component={Page6} options={{ headerShown: false }} />
        <Stack.Screen name="SplashPage" component={SplashPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
