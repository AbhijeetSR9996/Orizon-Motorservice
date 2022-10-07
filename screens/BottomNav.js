import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Screen14 from '../screens/Screen14';
import Screen16 from '../screens/Screen16';
import LoanScreen from '../components/others/LoanScreen';

function Home({navigation}) {
  
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

function Profile() {
  return (
    <View >
      <Screen16/>
    </View>
  );
}

function Loan() {
  return (
    <View>
      <LoanScreen/>
    </View>
  );
}

function Bookings() {
    return (
      <View >
        <Screen14/>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerShown:false,
        tabBarActiveBackgroundColor:'#f2994a',
        tabBarInactiveTintColor:'grey',
        tabBarHideOnKeyboard:true
      }} 
    >
      <Tab.Screen
        name="Home"
        component={Home}
        
        options={{
          tabBarIcon: () => (
            <Image  source={require('../components/images/house.png')} style={{
              width: 30,
              height: 30,
              margin: 5,
                
          }}/>
              ),
        }}
      />
      <Tab.Screen
        name="Loan"
        component={Loan}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: () => (
            <Image  source={require('../components/images/loan.png')} style={{
              width: 30,
              height: 30,
              margin: 5,
              
          }}/>      
          ),
        }}
      />
      
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: () => (
            <Image  source={require('../components/images/booking.png')} style={{
              width: 30,
              height: 30,
              margin: 5,
              
          }}/>      
          ),
        }}
      />
<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image  source={require('../components/images/profile.png')} style={{
              width: 30,
              height: 30,
              margin: 5,
              
          }}/>      
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomNav() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
