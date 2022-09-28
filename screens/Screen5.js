import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Screen5 = (props) => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const Separator = () => (
    <View style={styles.separator} />
  );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        //alert('Back Press handled and doing no action');
        'hardwareBackPress',
          onBackPress
      };
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );
    }, []),
  );

  return (
    <SafeAreaView >
      {/* <ScrollView style={{ height: 1000 }}> */}
      <View style={styles.bg1}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}>
          <Image style={styles.direct} source={require('../components/images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.txt1} onPress={() => navigation.navigate('Screen6')}>Services</Text>
        <Separator />
      </View>

      <View style={styles.bg1}>
        <SafeAreaView style={styles.boundary}>
          <Separator />
          <Separator />
          <View style={styles.bg2}>
            <View style={styles.innerview}>
              <TouchableOpacity>
                <Image style={styles.imgsrch} source={require('../components/images/search.png')} />
              </TouchableOpacity>
              <TextInput placeholder='Search' placeholderTextColor={'#808080'}
                maxLength={30} style={{ color: '#000', width: '80%' }} value={text} onChangeText={(value) => setText(value)} />
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 5,
                  marginLeft: 0,
                  bottom: 0
                }}
                onPress={() => setText("")}
              >
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    position: 'absolute'
                  }}
                  source={require("../components/images/crossing.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bg2}>
            <ScrollView >
              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}
                  onPress={() => navigation.navigate('Screen6')}>General Servicing</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Screen6')}>
                <Image source={require('../components/images/forward.png')} style={styles.imgarrow1} />
              </TouchableOpacity>
              <Image source={require('../components/images/separator2.png')} style={styles.sep1}></Image>

              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine2.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Gear and Clutch</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow2}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep2}></Image>


              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine3.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Electronics Repair</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow3}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep3}></Image>

              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine4.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Breaks and Tyres</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow4}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep4}></Image>


              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine5.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Scheduled Service</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow5}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep5}></Image>


              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine6.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Towing Service</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow6}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep6}></Image>

              <View style={{ left: 10 }}>
                <Image source={require('../components/images/engine7.png')} style={styles.imgpic}></Image>
                <Text style={styles.txt2}>Include visiting charges</Text>
                <Text style={styles.txt3}>Rust Cleaning</Text>
              </View>
              <Image source={require('../components/images/forward.png')} style={styles.imgarrow7}></Image>
              <Image source={require('../components/images/separator2.png')} style={styles.sep7}></Image>
            </ScrollView>
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
          </View>
        </SafeAreaView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'flex-start',
    height: 30,
    width: 30,
    left: 20,
    top: 8
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  bg1: {
    backgroundColor: '#000000',
  },
  bg2: {
    backgroundColor: '#ffffff',
  },
  safearea: {
    //height: 1770,
    height: 1800,
  },
  innerview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 25,
    backgroundColor: '#f1f1f1'
  },
  txt1: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    top: -13
  },
  txt2: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 87,
    bottom: 10
  },
  txt3: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 85,
    bottom: 30
  },
  imgsrch: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  imgpic: {
    position: 'relative',
    margin: 10,
    marginStart: 20
  },
  imgarrow1: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 15
  },
  imgarrow2: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 415
  },
  imgarrow3: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 335
  },
  imgarrow4: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 255
  },
  imgarrow5: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 175
  },
  imgarrow6: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 95
  },
  imgarrow7: {
    position: 'absolute',
    margin: 10,
    marginStart: 320,
    height: 30,
    width: 30,
    bottom: 15
  },
  sep1: {
    position: 'absolute',
    top: 72,
    maxWidth: 305,
    start: 30
  },
  sep2: {
    position: 'absolute',
    top: 152,
    maxWidth: 305,
    start: 30
  },
  sep3: {
    position: 'absolute',
    top: 232,
    maxWidth: 305,
    start: 30
  },
  sep4: {
    position: 'absolute',
    top: 312,
    maxWidth: 305,
    start: 30
  },
  sep5: {
    position: 'absolute',
    top: 392,
    maxWidth: 305,
    start: 30
  },
  sep6: {
    position: 'absolute',
    top: 472,
    maxWidth: 305,
    start: 30
  },
  sep7: {
    position: 'absolute',
    top: 552,
    maxWidth: 305,
    start: 30
  },
});

export default Screen5;
