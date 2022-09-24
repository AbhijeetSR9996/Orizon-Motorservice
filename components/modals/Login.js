import React, { useState } from 'react';
import {
  View, TouchableOpacity, Text, TextInput,
  StyleSheet, SafeAreaView
} from 'react-native';
import Hide from '../others/Hide';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );
  const [showModal, setShowModal] = useState(true);
  return (
    <>

      <SafeAreaView style={styles.safearea1}>
        <View>
          <SafeAreaView style={styles.safearea2}>
            <View style={styles.boundary}>
              <Separator />
              <Text style={styles.txt1} >Log In</Text>
              <Separator />
              <Separator />
              <Separator />
              <Text style={styles.txt2}>Vehicle Registration Number</Text>
              <View style={styles.innerview}>
                <TextInput placeholder='enter VRN' placeholderTextColor={'#808080'} style={styles.txtin} /></View>
              <Text style={styles.txt2} >Mobile Number</Text>
              <View style={styles.innerview}>
                <Hide />
              </View>
              <View style={styles.fixToText}>
                <TouchableOpacity style={styles.appButtonContainer3} onPress={() => navigation.navigate('Screen4')} >
                  <Text style={styles.appButtonText3}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.txt3} onPress={() => { setShowModal(!showModal); }}>Forgot password?</Text>
                <Separator />
                <Text style={styles.txt4} onPress={() => navigation.navigate('Screen3')}>Sign Up</Text>
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
  safearea1: {
    marginTop: 100
  },
  safearea2: {
    backgroundColor: '#000'
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 45,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  txt1: {
    alignSelf: 'flex-start',
    color: 'black',
    textTransform: 'capitalize',
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
    color: '#808080',
    marginTop: '-4%'
  },
  txt4: {
    alignSelf: 'center',
    color: '#007aff'
  },
  txtin: {
    marginHorizontal: 10,
    color: '#000'
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
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: -20
  },
  appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 25
  },
  appButtonText3: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
  },
});

export default Login;
