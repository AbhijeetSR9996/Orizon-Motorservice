import { View, Text, StyleSheet, TextInput, button, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.vw}>
      <View style={styles.imgvw}>
        <Image style={styles.img} source={require('../logo.png')} />
      </View>
      <View style={{ height: 700, width: 500, backgroundColor: 'white', position: 'relative' }}>
        <View style={styles.vw2}>
          <TextInput placeholder='Name' placeholderTextColor={'grey'} style={{ bottom: 60, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} />
          <TextInput placeholder='Email' placeholderTextColor={'grey'} style={{ bottom: 50, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} />
          <TextInput placeholder='Confirm Email' placeholderTextColor={'grey'} style={{ bottom: 40, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} />
          <TextInput placeholder='Password' placeholderTextColor={'grey'} style={{ bottom: 30, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} secureTextEntry={true} />
          <TextInput placeholder='Confirm Password' placeholderTextColor={'grey'} style={{ bottom: 20, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} secureTextEntry={true} />

          <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('Screen1')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Signup</Text>
          </TouchableOpacity>

          <Text style={{ top: 70, marginRight: '10%', color: 'grey' }}>Already a User? </Text>
          <Text style={{ fontWeight: 'bold', top: 50, left: 45, color: 'grey' }} onPress={() => navigation.navigate('Screen2')}>Log IN</Text>
        </View>
      </View>
    </View>
  )
}

export default Screen3;

const styles = StyleSheet.create({
  vw: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    position: 'relative'
  },
  vw2: {
    position: 'relative',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
    height: 300,
    width: 500

  },
  img: {
    height: 50,
    width: 50,
    alignSelf: 'center',

  },
  imgvw: {
    backgroundColor: 'blue',
    position: 'relative',
    height: 100,
    width: 500,
    justifyContent: 'center'
  },
  to: {
    position: 'absolute',
    backgroundColor: 'blue',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -60,
    marginVertical: 60
  }
});
