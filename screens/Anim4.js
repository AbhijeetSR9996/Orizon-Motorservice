import React, { useState } from 'react';
import {
  Animated, View, TouchableOpacity, Easing, Text, TextInput, Modal,
  StyleSheet, SafeAreaView, StatusBar, Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from '../components/modals/Login';
import Signup from '../components/modals/Signup';

const bgImage = require('../components/images/orizonbig.png');
const Anim4 = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const animatedValue = new Animated.Value(0);
  const Separator = () => (
    <View style={styles.separator} />
  );

  const handleAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  }

  const showLogin = () => {
    setShowModal(!showModal)
  }

  const showSignup = () => {
    handleAnimation,
      setShowModal2(!showModal2);
  }

  return (
    <>
      <View>
        <StatusBar style={styles.sb} />
      </View>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.view1}>

          <TouchableOpacity style={styles.appButtonContainer1}
            onPressIn={() => setShowModal(!showModal)} onPress={handleAnimation}

          >
            <Text style={styles.appButtonText1}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer2}
            onPressIn={() => setShowModal2(!showModal2)} onPress={handleAnimation}
          >
            <Text style={styles.appButtonText2}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.txt5}>All motorcycle services on your</Text>
          <Text style={styles.txt6}>fingertips.</Text>

          <Animated.Image source={bgImage} resizeMode={'center'}
            style={{
              position: 'absolute', left: 170, top: 300, height: 20, width: 16, borderRadius: 10,
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5]
                  })
                },
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -260]
                  })
                },
                {
                  scaleX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 10]
                  })
                },
                {
                  scaleY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 10]
                  })
                },
              ]
            }} />

          <SafeAreaView style={styles.safearea2}>
            <View style={styles.container2}>
              <Modal animationType={'slide'} transparent={true} visible={showModal}
                onRequestClose={() => { console.log('Modal has been closed.'); }}>
                <Login />
              </Modal>
              <Modal animationType={'slide'} transparent={true} visible={showModal2}
                onRequestClose={() => { console.log('Modal has been closed.'); }}>
                <Signup />
              </Modal>
            </View>
          </SafeAreaView>

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safearea: {
    height: 1300,
    backgroundColor: '#000'
  },
  safearea2: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#000',
    height: 1000
  },
  safearea3: {
    marginTop: 100,
  },
  sb: {
    backgroundColor: "#000"
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  view2: {
    top: 530
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "#f2994a",
    top: 580,
    left: 35,
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    height: 60,
    marginTop: 100
  },
  appButtonText1: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
    margin: 15,
    marginHorizontal: 20,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#808080",
    top: 580,
    left: 70,
    borderRadius: 15,
    paddingVertical: -3,
    paddingHorizontal: 12,
    margin: 25,
    width: 140,
    height: 60,
    marginTop: 100
  },
  appButtonText2: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
    margin: 15,
    marginHorizontal: 20,
  },
  container2: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec4344',
    marginTop: 120,
    width: 50,
  },
  bg: {
    backgroundColor: '#000000'
  },
  appButtonText3: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
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
  txt5: {
    alignSelf: 'center',
    color: '#ffffff',
    //bottom: 140,
    bottom: 140,
    right: 160,
    zIndex: 2
  },
  txt6: {
    alignSelf: 'center',
    color: '#ffffff',
    //bottom: 140,
    bottom: 123,
    //right: 160,
    right: 230,
    zIndex: 2
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

  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10,
    alignSelf: 'center'
  },
  modal: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '00ff00',
    padding: 100,
    marginTop: 50,
    margin: 0
  },
});


export default Anim4;

