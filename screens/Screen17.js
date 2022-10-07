import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Hide4 from '../components/others/Hide4';

const Screen17 = ({ navigation }) => {

  const Separator = () => (
    <View style={styles.separator} />
  );
  const [text, setText] = useState("");
  const [texts, setTexts] = useState("");
  const [image, setImage] = useState(null);
  const [hidePass, setHidePass] = useState(true);
  const addImage = () => { };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'Yall needs access to your camera ',

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      } else {

      }
    } catch (err) {

    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 700,
      height: 700,
      compressImageQuality: 0.7,
      compressImageMaxWidth: 700,
      compressImageMaxHeight: 700,
      includeBase64: true,
    }).catch(error => { });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 700,
      height: 700,

      includeBase64: true,
      compressImageQuality: 0.5,
    });
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'ADD PICTURE',

      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Camera',
          onPress: () => takePhotoFromCamera(),
        },
        {
          text: 'Choose from Gallery',
          onPress: () => choosePhotoFromLibrary(),
        },
      ],
      { cancelable: false },
    );

  return (
    <>
      <SafeAreaView >
        <ScrollView>
          <Separator />
          <Separator />

          <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content' />

          <View>
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen16')}>Close</Text>
            <Text style={styles.txt2}>Edit Profile</Text>
            <Text style={styles.txt3} onPress={() => navigation.navigate('Screen18')}>Save</Text>

            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
              <Image style={styles.img1} source={require('../components/images/profilepic.png')} />
              <Image style={styles.img2} source={require('../components/images/camera.png')} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.txt4}>Name</Text>
            {/* <Text style={styles.txt5}>Alfred Alex</Text> */}
            <View style={{
              height: 40,
              margin: 5,
              //borderWidth: 1.5,
              marginVertical: 10,
              marginHorizontal: 15,
              borderColor: 'black',
              top: 65
            }}>
              <TextInput placeholder='Alfred Alex' placeholderTextColor={'#808080'} maxLength={30}
                value={text} onChangeText={(value) => setText(value)} style={{ color: '#000' }} />
            </View>

            <Text style={styles.txt6}>Email</Text>
            {/* <Text style={styles.txt7}>alfred@gmail.com</Text> */}
            <View style={{
              height: 40,
              margin: 5,
              //borderWidth: 1.5,
              marginVertical: 10,
              marginHorizontal: 15,
              borderColor: 'black',
              top: 75
            }}>
              <TextInput placeholder='alfred@gmail.com' placeholderTextColor={'#808080'} maxLength={30}
                value={texts} keyboardType='email-address' onChangeText={(value) => setTexts(value)} style={{ color: '#000' }} />
            </View>

            <Text style={styles.txt8}>Phone Number</Text>
            {/* <Text style={styles.txt9}>+91 7946132649</Text> */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              //borderWidth: 1.5,
              height: 35,
              borderRadius: 10,
              margin: 5,
              marginVertical: 10,
              marginHorizontal: 7,
              top: 87
            }}><Hide4 /></View>


            <Text style={styles.txt10}>Bio</Text>
            {/* <Text style={styles.txt11}>********</Text> */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              //borderWidth: 1.5,
              height: 35,
              borderRadius: 10,
              margin: 5,
              marginVertical: 15,
              marginHorizontal: 6,
              top: 100
            }}><TextInput
                placeholder="********"
                placeholderTextColor={'#808080'}
                multiline
                secureTextEntry={hidePass ? true : false}
                style={{
                  height: 50,
                  width: "90%",
                  marginHorizontal: 10,
                  color: '#000',
                }} />
            </View>


            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen18')}>
                <Text style={styles.appButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>

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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 140,
    top: 176
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'white',
    top: 10,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer: {
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 12,
    margin: 20,
    width: 290,
    //left: -40,
    top: 10,
    marginTop: 355,
    marginBottom: 485,
    paddingBottom: 17,
    alignSelf: 'center'
  },
  boundary: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 50,
    //elevation:8,
    //left: 40,
    height: 140,
    width: 430,
    //right: 170,
    padding: 50,
    marginTop: 420
  },
  txt1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: -27,
    alignSelf: 'flex-start',
    left: 10
  },
  txt2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '900',
    position: 'absolute',
    margin: 10,
    top: -30,
    alignSelf: 'center'
  },
  txt3: {
    color: 'rgba(0, 122, 255, 1)',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: -27,
    alignSelf: 'flex-end',
    right: 10
  },
  txt4: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 50,
    top: 50,
    alignSelf: 'flex-start',
    left: 10
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    top: 70,
    alignSelf: 'flex-start',
    left: 10
  },
  txt6: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 120,
    alignSelf: 'flex-start',
    left: 10
  },
  txt7: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    margin: 10,
    top: 140,
    alignSelf: 'flex-start',
    left: 10
  },
  txt8: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 190,
    alignSelf: 'flex-start',
    left: 10
  },
  txt9: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    margin: 10,
    top: 210,
    alignSelf: 'flex-start',
    left: 10
  },
  txt10: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 260,
    alignSelf: 'flex-start',
    left: 10
  },
  txt11: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    margin: 10,
    top: 280,
    alignSelf: 'flex-start',
    left: 10
  },
  img1: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    top: 40
  },
  img2: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    top: 27,
  },
});

export default Screen17;
