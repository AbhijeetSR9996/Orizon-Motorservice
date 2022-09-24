import React, { useState } from 'react';
import {
  View, TouchableOpacity, Text, TextInput,
  StyleSheet, SafeAreaView, ScrollView
} from 'react-native';
import Hide from '../others/Hide';
import Cleartext from '../others/Cleartext';
import Hide2 from '../others/Hide2';
import Hide3 from '../others/Hide3';
import { useNavigation } from '@react-navigation/native';
import Hide4 from '../others/Hide4';

const Signup = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );
  const [showModal, setShowModal] = useState(true);
  return (
    <SafeAreaView >
      <ScrollView >
        <SafeAreaView style={{ marginTop: 97 }}>
          <View>
            <SafeAreaView style={styles.bg}>
              <View style={styles.boundary}>
                <Separator />
                <Text style={styles.txt1}
                  onPress={() => { setShowModal(!showModal); }}>Sign up</Text>
                <Separator />
                <Separator />
                <Separator />
                <Text style={styles.txt2} maxLength={50}>Name</Text>
                <View style={styles.innerview}>
                  <Cleartext /></View>
                <Text style={styles.txt2}>Vehicle Registration Number</Text>
                <View style={styles.innerview}>
                  <TextInput placeholder='enter vehicle regn number' placeholderTextColor={'#808080'} style={styles.txtin} /></View>
                <Text style={styles.txt2}>Mobile Number</Text>
                <View style={styles.innerview}>
                  <Hide4 /></View>
                <Text style={styles.txt2}>Confirm Mobile Number</Text>
                <View style={styles.innerview}>
                  <Hide2 /></View>
                <Text style={styles.txt4}>Chassis Number (Optional)</Text>
                <View style={styles.innerview}>
                  <Hide3 /></View>
                <View style={styles.fixToText}>
                  <Separator />
                  <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen4')} >
                    <Text style={styles.appButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                  <Text style={styles.txt3} onPress={() => navigation.navigate('Screen2')}>
                    Already have an account? Log In instead</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10,
    alignSelf: 'center'
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
    margin: 20,
    marginHorizontal: 25,
    bottom: 35
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 45,
  },
  bg: {
    backgroundColor: '#000000'
  },
  txt1: {
    alignSelf: 'flex-start',
    color: 'black',
    textTransform: 'none',
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
    color: '#007aff',
    top: -50
  },
  txt4: {
    alignSelf: 'flex-start',
    color: '#808080',
    marginLeft: 32
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
    color: '#000'
  },
});

export default Signup;
