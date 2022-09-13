import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Page1 = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <View style={{ backgroundColor: '#fff' }}>
        <SafeAreaView style={{ marginBottom: '25%', backgroundColor: '#fff' }}>
          <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.bg} >
              <Image style={styles.direct} source={require('../../LoginApp/imagescopy.jpg')} />
              <Separator />
            </View>
            <SafeAreaView style={styles.bg}>
              <View style={styles.boundary}>
                <Separator />
                <View style={styles.fixToText}>
                  <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Page2')} >
                    <Text style={styles.appButtonText}>LOG IN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.appButtonContainer2} onPress={() => navigation.navigate('Page3')} >
                    <Text style={styles.appButtonText}>SIGN UP</Text>
                  </TouchableOpacity>
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
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 100,
    //flex: 1
  },
  direct: {
    marginEnd: 100,
    left: '12.5%',
    bottom: '3%',
    marginTop: '10%',
    //alignSelf: 'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    backgroundColor: '#000000',
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    //textTransform:"capitalize",
    margin: 15,
    marginHorizontal: 20,
  },
  sb: {
    backgroundColor: "#000"
  },
  txt5: {
    alignSelf: 'center',
    color: 'white',
    bottom: 80,

  },
  txt6: {
    alignSelf: 'center',
    color: 'white',
    bottom: 80,
  },
  btn1: {
    elevation: 8,
    backgroundColor: "grey",
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    height: 60,
    alignSelf: 'center'
  },
  btn2: {
    elevation: 8,
    backgroundColor: "orange",
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    top: 0,
    left: 85,
    height: 60,

  },

  //Login

  container2: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec4344',
    marginTop: 120,
    width: 50,
    height: 100,

  },
  modal: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '00ff00',
    padding: 100,
    marginTop: 50,
    margin: 0
  },
  safearea: {
    flex: 0
  },

  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingBottom: '0%'
  },
  appButtonText2: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 20,
    width: '60%',
    alignSelf: 'center',
    top: '30%'
  },
  boundary: {
    borderWidth: 1,
    //borderColor: '#000',
    borderColor: '#fff',
    backgroundColor: '#ffffff',
    //height: '110%',
    marginBottom: '0%',
  },
  bg: {
    backgroundColor: '#000000',
    justifyContent: 'center',

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
    marginHorizontal: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "grey",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 20,
    width: '60%',
    alignSelf: 'center',

  }
});

export default Page1;