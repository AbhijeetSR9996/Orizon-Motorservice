import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Screen } from 'react-native-screens';
import { useNavigation } from '@react-navigation/core';

const Page2 = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView>
        <View>
          <View style={styles.bg} >
            <Image style={styles.direct} source={require('../../LoginApp/imagescopy.jpg')} />
            <Separator />
          </View>
          <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
              <Separator />
              <Text style={styles.txt1}>LOG IN</Text>
              <Separator />
              <Separator />
              <Separator />
              <View style={styles.innerview}>
                <TextInput placeholder='Email' style={styles.txtin} placeholderTextColor='#808080' />
              </View>
              <View style={styles.innerview}>
                <TextInput placeholder='Password' style={styles.txtin} placeholderTextColor='#808080' secureTextEntry />
              </View>
              <View style={styles.fixToText}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Page4')} >
                  <Text style={styles.appButtonText}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.txt3} onPress={() => navigation.navigate('Page5')}>Forgot password?</Text>
                {/* <Separator /> */}
                <Text style={[styles.txt4, { top: '2%' }]} onPress={() => navigation.navigate('Page3')}>New account? Signup Now</Text>
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  direct: {
    //marginEnd: 100,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 25
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    //borderRadius: 45,
  },
  bg: {
    backgroundColor: '#000000'
  },
  txt1: {
    alignSelf: 'flex-start',
    color: 'black',
    //textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    top: 30,
    marginStart: 25
  },
  txt2: {
    alignSelf: 'flex-start',
    color: '#808080',
    marginLeft: 32
  },
  txt3: {
    alignSelf: 'center',
    color: '#808080'
  },
  txt4: {
    alignSelf: 'center',
    color: '#007aff'
  },
  innerview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    height: 40,
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 25
  },
  txtin: {
    marginHorizontal: 10,
    color: '#000000'
  },
});

export default Page2;