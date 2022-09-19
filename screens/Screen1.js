import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert, PermissionsAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';

const genderdata = [
  { label: 'Others', value: 'Others' },
  { label: 'Woman', value: 'Woman' },
  { label: 'Man', value: 'Man' },
];

const Screen1 = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [filePath, setFilePath] = useState({});
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'SimpleApp needs access to your camera ',

          buttonNeutral: 'Ask Later',
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

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.log(err);
      alert('Write permission error', err);
    }
    return false;
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

    <View style={styles.vw}>
      <View>
        <Text style={styles.txt1}>Create Account</Text>
        <Text style={styles.txt2}>Enter your information below </Text>
      </View>

      <TouchableOpacity style={{
        alignSelf: 'flex-start', height: 80, width: 80, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
        borderWidth: 0.5, borderColor: 'grey', top: 10, marginHorizontal: 30
      }} onPress={() => createTwoButtonAlert()}>
        <Image source={require('../assets/add.png')} style={{ height: 20, width: 20 }} />
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000000' }} >Add photos</Text>
      </TouchableOpacity>
      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 20, marginHorizontal: 30
      }}>
        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>First Name</Text>
        <TextInput placeholder='Enter first name' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15 }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 30, marginHorizontal: 30
      }}>
        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Last Name</Text>
        <TextInput placeholder='Enter last name' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15 }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 40, marginHorizontal: 30
      }}>
        <Image source={require('../assets/mail.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Email address</Text>
        <TextInput placeholder='Enter email address' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15 }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 50, marginHorizontal: 30
      }}>
        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Username</Text>
        <TextInput placeholder='Enter username' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15 }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 60, marginHorizontal: 30
      }}>
        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />

        <Dropdown
          itemTextStyle={{
            fontSize: 15,
            color: '#000000',
            fontWeight: 'bold',
            height: 18,
            lineHeight: 21,
            letterSpacing: -0.017,
            left: '-35%'
          }}
          style={{
            width: 250,
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            color: '#000000',
            height: 30,
            backgroundColor: 'transparent',
            marginLeft: '10%'
          }}
          placeholder="  Gender"
          placeholderStyle={{
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
            height: 18,
            lineHeight: 21,
            letterSpacing: -0.017,
            bottom: '1%',
            paddingLeft: '1%',
            color: '#000000'
          }}
          selectedTextStyle={{
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
            lineHeight: 21,
            letterSpacing: -0.017,
            paddingLeft: '4%',
            color: '#000000'
          }}
          data={genderdata}
          iconColor='transparent'
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}

        />

      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 70, marginHorizontal: 30, marginTop: '0%'
      }}>
        <Image source={require('../assets/lock.png')} style={{ height: 20, width: 15, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Password</Text>
        <TextInput placeholder='Enter password' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15 }} secureTextEntry />
      </View>

      <TouchableOpacity style={{
        height: 50, width: 300, backgroundColor: 'pink',
        alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderRadius: 10, top: 90
      }} onPress={() => navigation.navigate('Screen2')}>
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Next</Text>
      </TouchableOpacity>
    </View>

  );
};

export default Screen1;

const styles = StyleSheet.create({
  vw: {
    flex: 1,
    //height: 100
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 30,
    color: '#000000'
  },
  txt2: {
    marginHorizontal: 30,
    color: '#000000'
  },
});