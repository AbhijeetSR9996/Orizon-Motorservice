import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Modal, } from 'react-native';
import { useState } from 'react';
import Hide from '../components/others/Hide';


const Screen1 = ({ navigation }) => {

  const [showModal, setShowModal] = useState(false);
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <View>
        <StatusBar style={styles.sb} />
      </View>
      <SafeAreaView>
        <View style={styles.container}>
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Image style={styles.direct2} source={require('../components/images/orizonbig.png')} />
          <Separator />

          <Text style={styles.txt5}>All motorcycle services on your</Text>
          <Text style={styles.txt6}>fingertips.</Text>
          <Separator />
          <Separator />
          <Separator />
          <Separator />

          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.btn1}
              onPress={() => { setShowModal(!showModal); }} >
              <Text style={styles.appButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}
              onPress={() => navigation.navigate('Screen3')} >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/*=====================Login========================*/}

          <SafeAreaView style={styles.safearea}>
            <View style={styles.container2}>
              <Modal animationType={'slide'} transparent={true} visible={showModal}
                onRequestClose={() => { console.log('Modal has been closed.'); }}>
                <SafeAreaView>
                  <View>
                    <View style={styles.bg} >
                      <Image style={styles.direct} source={require('../components/images/orizonsmall.png')} />
                      <Separator />
                    </View>
                    <SafeAreaView style={styles.bg}>
                      <View style={styles.boundary}>
                        <Separator />

                        <Text style={styles.txt1} >Log In</Text>
                        <Separator />
                        <Separator />
                        <Separator />
                        <Text style={styles.txt2}>Vehicle Registration Number</Text>
                        <View style={styles.innerview}>
                          <TextInput placeholder='enter VRN' style={styles.txtin} /></View>
                        <Text style={styles.txt2} >Mobile Number</Text>
                        <View style={styles.innerview}>
                          <Hide />
                        </View>
                        <View style={styles.fixToText}>
                          <TouchableOpacity style={styles.appButtonContainer2} onPress={() => navigation.navigate('Screen4')} >
                            <Text style={styles.appButtonText2}>Log In</Text>
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
              </Modal>
            </View>
          </SafeAreaView>

          {/*=====================Signup========================*/}


        </View>
        <View style={styles.container}>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  direct2: {
    alignSelf: 'center',
    marginVertical: 80
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
    textTransform: "capitalize",
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
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    height: 60
  },
  btn2: {
    elevation: 8,
    backgroundColor: "#808080",
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    top: -110,
    left: 170,
    height: 60
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
    alignSelf: 'stretch'
  },
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10,
    alignSelf: 'center'
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
    paddingHorizontal: 12,
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 25
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

  //Signup



});

export default Screen1;