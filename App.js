import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import HomeScreenSearch from './screens/HomeScreenSearch';
//import Screen1 from './screens/Screen1';
import ScreenSplash from './screens/ScreenSplash';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import Screen8 from './screens/Screen8';
import Screen9 from './screens/Screen9';
import Screen10 from './screens/Screen10';
import Screen11 from './screens/Screen11';
import Screen12 from './screens/Screen12';
import Screen13 from './screens/Screen13';
import Screen14 from './screens/Screen14';
import Screen15 from './screens/Screen15';
import Screen16 from './screens/Screen16';
import Screen17 from './screens/Screen17';
import Screen18 from './screens/Screen18';
import Screen19 from './screens/Screen19';
import Screen20 from './screens/Screen20';
import Screen21 from './screens/Screen21';
import Anim4 from './screens/Anim4';
import Secondscreen from './screens/Secondscreen';
import Login from './components/modals/Login';
import GoogleButton from './screens/GoogleButton';
import SliderButtons from './screens/SliderButtons';
import UpcomingScreen from './components/others/UpcomingScreen';
import OngoingScreen from './components/others/OngoingScreen';
import CompletedScreen from './components/others/CompletedScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './screens/BottomNav';
import { Tabs } from '@material-ui/core';
import LoanScreen from './components/others/LoanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anim4">
        {/*{<Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>}*/}
        <Stack.Screen name="ScreenSplash" component={ScreenSplash} options={{ headerShown: false }} />
        <Stack.Screen name="Anim4" component={Anim4} options={{ headerShown: false }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
        <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} />
        <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }} />
        <Stack.Screen name="Screen6" component={Screen6} options={{ headerShown: false }} />
        <Stack.Screen name="Screen7" component={Screen7} options={{ headerShown: false }} />
        <Stack.Screen name="Screen8" component={Screen8} options={{ headerShown: false }} />
        <Stack.Screen name="Screen9" component={Screen9} options={{ headerShown: false }} />
        <Stack.Screen name="Screen10" component={Screen10} options={{ headerShown: false }} />
        <Stack.Screen name="Screen11" component={Screen11} options={{ headerShown: false }} />
        <Stack.Screen name="Screen12" component={Screen12} options={{ headerShown: false }} />
        <Stack.Screen name="Screen13" component={Screen13} options={{ headerShown: false }} />
        <Stack.Screen name="Screen14" component={Screen14} options={{ headerShown: false }} />
        <Stack.Screen name="Screen15" component={Screen15} options={{ headerShown: false }} />
        <Stack.Screen name="Screen16" component={Screen16} options={{ headerShown: false }} />
        <Stack.Screen name="Screen17" component={Screen17} options={{ headerShown: false }} />
        <Stack.Screen name="Screen18" component={Screen18} options={{ headerShown: false }} />
        <Stack.Screen name="Screen19" component={Screen19} options={{ headerShown: false }} />
        <Stack.Screen name="Screen20" component={Screen20} options={{ headerShown: false }} />
        <Stack.Screen name="Screen21" component={Screen21} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="GoogleButton" component={GoogleButton} options={{ headerShown: false }} />

        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name="LoanScreen" component={LoanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Secondscreen" component={Secondscreen} options={{ headerShown: false }} />
        <Stack.Screen name="SliderButtons" component={SliderButtons} options={{ headerShown: false }} />
        <Stack.Screen name="UpcomingScreen" component={UpcomingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OngoingScreen" component={OngoingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CompletedScreen" component={CompletedScreen} options={{ headerShown: false }} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreenSearch" component={HomeScreenSearch} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};