import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.vw}>
      <View style={styles.imgvw}>
        <Image style={styles.img} source={require('../logo.png')} />
      </View>

      <View style={styles.vw2}>
        <TextInput placeholder='Email ID' placeholderTextColor={'grey'} style={{ bottom: 60, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} />
        <TextInput placeholder='Password' placeholderTextColor={'grey'} style={{ bottom: 50, borderWidth: 0.5, borderBottomColor: 'grey', width: 300, color: 'black' }} secureTextEntry={true} />
        <Text style={{ left: 100, bottom: 40, color: 'grey' }}>Forget Password?</Text>

        <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('Screen1')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ top: 40, marginRight: '10%', color: 'grey' }}>New User? </Text>
        <Text style={{ fontWeight: 'bold', top: 20, left: 35, color: 'grey' }} onPress={() => navigation.navigate('Screen3')}>Sign UP</Text>
      </View>

    </View>
  )
};

export default Screen1;

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
    top: 400,
    height: 300,
    width: 500

  },
  img: {
    height: 250,
    width: 250,
    alignSelf: 'center',

  },
  imgvw: {
    backgroundColor: 'blue',
    position: 'absolute',
    height: 400,
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
    bottom: 30,
    marginVertical: 60
  }
});


