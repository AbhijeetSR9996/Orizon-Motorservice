import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


const Page3 = ({ navigation }) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  const [hidePass, setHidePass] = useState(true);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.bg}>
            <Image style={styles.direct} source={require('../../LoginApp/imagescopy.jpg')} />
            <Separator />
          </View>
          <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
              <Separator />
              <Text style={styles.txt1}>SIGN UP</Text>
              <Separator />
              <Separator />
              <Separator />
              {/* <Text style={styles.txt2} maxLength={50}>Name</Text> */}
              <View style={[styles.innerview, { marginBottom: '3%' }]}>
                <TextInput placeholder='Name' style={styles.txtin} placeholderTextColor='#808080' />
                {/* <Cleartext/> */}
              </View>
              {/* <Text style={styles.txt2}>Mobile Number</Text> */}
              <View style={[styles.innerview, { marginBottom: '3%' }]}>
                <TextInput placeholder='Email' style={styles.txtin} placeholderTextColor='#808080' />
              </View>
              {/* <Text style={styles.txt2}>Confirm Mobile Number</Text> */}
              <View style={[styles.innerview, { marginBottom: '3%' }]}>
                <TextInput placeholder='Confirm Email' style={styles.txtin} placeholderTextColor='#808080' />
              </View>
              <View style={[styles.innerview, { marginBottom: '3%' }]}>
                <TextInput placeholder='Password' style={styles.txtin} placeholderTextColor='#808080' secureTextEntry />
              </View>
              {/* <Text style={styles.txt2}>Confirm Mobile Number</Text> */}
              <View style={[styles.innerview, { marginBottom: '8%' }]}>
                <TextInput placeholder='Confirm Password' style={styles.txtin} placeholderTextColor='#808080' secureTextEntry />
              </View>
              <View style={styles.fixToText}>
                <Separator />
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Page4')} >
                  <Text style={styles.appButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.txt3} onPress={() => navigation.navigate('Page2')}>
                  Already have an account? Login Now</Text>
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
        </ScrollView>
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
    alignSelf: 'center',
    //marginEnd: 100
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
    //borderRadius: 45,
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
    top: -35
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
    color: '#000000'
  },
});

export default Page3;
