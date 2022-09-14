import { View, Text, StyleSheet, TextInput, button, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';

const Screen2 = () => {
  return (
    <View style={styles.vw}>
      <View style={styles.imgvw}>
        <Image style={styles.img} source={require('../logo.png')} />
        <ScrollView horizontal={true} style={{ height: 130, backgroundColor: 'lightblue', position: 'relative', alignContent: 'center' }}>
          <Text style={{ left: 40, top: 10, marginLeft: 50, color: 'white', fontSize: 20 }}>Cyber Security</Text>
          <Text style={{ left: 60, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Hacking </Text>
          <Text style={{ left: 80, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Laravel </Text>
          <Text style={{ left: 100, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Programming </Text>
          <Text style={{ left: 120, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Cyber Security</Text>
          <Text style={{ left: 140, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Hacking </Text>
          <Text style={{ left: 160, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Laravel </Text>
          <Text style={{ left: 180, top: 10, marginLeft: 10, color: 'white', fontSize: 20 }}>Programming </Text>
        </ScrollView>
      </View>
      <View style={{ height: 700, width: 500, backgroundColor: 'white', position: 'relative' }}></View>
    </View>
  )
}

export default Screen2;

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
    bottom: 30,
    marginVertical: 60
  }
});
