import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Screen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignSelf: 'center', display: 'flex', justifyContent: 'center', alignContent: 'space-around', position: 'relative', height: 200, width: 400, backgroundColor: 'pink' }}>
        <Image source={require('../assets/mypic.jpg')} style={{ height: 100, width: 100, position: 'absolute', marginHorizontal: 150, borderRadius: 50 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 25, position: 'absolute', marginHorizontal: 125, bottom: 20 }}>@abhi_singh</Text>
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 20, marginHorizontal: 30, marginLeft: '11%'
      }}>
        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Full Name</Text>
        <TextInput placeholder='Enter full name' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15, color: '#000000' }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 30, marginHorizontal: 30, marginLeft: '11%'
      }}>
        <Image source={require('../assets/mail.png')} style={{ height: 20, width: 20, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Email address</Text>
        <TextInput placeholder='Enter email address' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15, color: '#000000' }} />
      </View>

      <View style={{
        alignSelf: 'flex-start', height: 60, width: 300, backgroundColor: "white",
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey',
        position: 'relative', top: 40, marginHorizontal: 30, marginLeft: '11%'
      }}>
        <Image source={require('../assets/lock.png')} style={{ height: 20, width: 15, position: 'absolute', marginLeft: 10 }} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', position: 'absolute', marginLeft: 40, top: 10, color: '#000000' }}>Add shipping address</Text>
        <TextInput placeholder='Enter shipping address' placeholderTextColor='#808080' style={{ position: 'absolute', marginLeft: 35, top: 15, color: '#000000' }} />
      </View>

      <TouchableOpacity style={{
        height: 50, width: 300, backgroundColor: 'pink',
        alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, top: 60, marginHorizontal: 30
      }}>
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }} >Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;