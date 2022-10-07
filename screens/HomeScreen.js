import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nexthings from '../components/others/Nexthings';
import Besthings from '../components/others/Besthings';
import Offers from '../components/others/Offers';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("");

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView style={styles.safearea} >
        <ScrollView showsVerticalScrollIndicator={false} style={styles.bg1} >
          <View>
            <View style={styles.bg1} >
              <Image style={styles.direct} source={require('../components/images/orizonsmall.png')} />
              <Text style={styles.txt1}
                onPress={() => navigation.navigate('HomeScreenSearch')}>Orizon</Text>
              <Text style={styles.txt2}
                onPress={() => navigation.navigate('Screen5')}>Motorservice</Text>
              <Separator />
            </View>
            <View style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>

                <View style={styles.innerview1}>
                  <TouchableOpacity onPress={() => navigation.navigate('HomeScreenSearch')}>
                    <Image style={styles.img1} source={require('../components/images/search.png')} />
                  </TouchableOpacity>
                  <View style={styles.innerview2}>
                    <TextInput placeholder='Fault Diagnosis' placeholderTextColor={'#808080'} maxLength={30}
                      value={text} onChangeText={(value) => setText(value)} style={{ color: '#000' }} />
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 5,
                        marginLeft: 273,
                        bottom: 19
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
              </View>
              <View style={styles.bg2}>

                <Image source={require('../components/images/bikerepair.png')} style={styles.img2} />

                <View style={{ alignSelf: 'center', marginRight: 13 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
                    <Image source={require('../components/images/generalservicing.png')} style={styles.img3}></Image>
                  </TouchableOpacity>
                  <Text style={styles.txt3}>General</Text>
                  <Text style={styles.txt4}>Servicing</Text>
                  <Image source={require('../components/images/gearandclutch.png')} style={styles.img4}></Image>
                  <Text style={styles.txt5}>Gear and</Text>
                  <Text style={styles.txt6}>Clutch</Text>
                  <Image source={require('../components/images/res11.png')} style={styles.img5}></Image>
                  <Text style={styles.txt7}>Moto shine</Text>
                  <Text style={styles.txt8}>& polish</Text>
                  <Image source={require('../components/images/res12.png')} style={styles.img6}></Image>
                  <Text style={styles.txt9}>Scheduled</Text>
                  <Text style={styles.txt10}>Service</Text>
                </View>

                <View style={{ alignSelf: 'center', marginRight: 17 }}>
                  <Image source={require('../components/images/towingservice.png')} style={styles.img7}></Image>
                  <Text style={styles.txt11}>Towing</Text>
                  <Text style={styles.txt12}>Service</Text>
                  <Image source={require('../components/images/res21.png')} style={styles.img8}></Image>
                  <Text style={styles.txt13}>Loan</Text>
                  <Text style={styles.txt14}>Request</Text>
                  <Image source={require('../components/images/res22.png')} style={styles.img9}></Image>
                  <Text style={styles.txt15}>Offers &</Text>
                  <Text style={styles.txt16}>Promotion</Text>
                  <Image source={require('../components/images/seeall2.png')} style={styles.img10}></Image>
                  <Text style={styles.txt17}>See all</Text>
                </View>

                <Besthings />

                <Nexthings />

                <Offers />

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

              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10
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
    borderRadius: 45,
  },
  safearea: {
    height: 1900
  },
  bg1: {
    backgroundColor: '#000000',
  },
  bg2: {
    backgroundColor: '#ffffff',
  },
  txt1: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 28,
    position: 'absolute',
    alignSelf: 'center',
    margin: 10,
    paddingEnd: -70,
    bottom: 40,
    paddingStart: 37
  },
  txt2: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 28,
    position: 'relative',
    alignSelf: 'flex-end',
    margin: -17,
    bottom: 28,
    paddingEnd: 64
  },
  txt3: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 17,
    bottom: 15
  },
  txt4: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 15,
    bottom: 40
  },
  txt5: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 110,
    bottom: 220
  },
  txt6: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 115,
    bottom: 75
  },
  txt7: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 190,
    bottom: 118
  },
  txt8: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 198,
    bottom: 143
  },
  txt9: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 275,
    bottom: 187
  },
  txt10: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 282,
    bottom: 212
  },
  txt11: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 23,
    bottom: 235
  },
  txt12: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 23,
    bottom: 260
  },
  txt13: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 117,
    bottom: 303
  },
  txt14: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 110,
    bottom: 327
  },
  txt15: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 195,
    bottom: 370
  },
  txt16: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 190,
    bottom: 395
  },
  txt17: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    //paddingStart: 275,
    paddingStart: 280,
    bottom: 438
  },
  innerview1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    height: 40,
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: 'black',
    backgroundColor: '#f1f1f1'
  },
  innerview2: {
    height: 40,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: 'black'
  },
  img1: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  img2: {
    width: 315,
    height: 200,
    margin: 20,
    borderRadius: 10,
    bottom: 15,
    alignSelf: 'center'
  },
  img3: {
    position: 'relative',
    margin: 10,
    marginStart: 20
  },
  img4: {
    position: 'absolute',
    marginStart: 110,
    top: 10
  },
  img5: {
    position: 'absolute',
    marginStart: 185,
    top: 10
  },
  img6: {
    position: 'absolute',
    marginStart: 280,
    top: 10
  },
  img7: {
    position: 'relative',
    margin: 10,
    marginStart: 20,
    bottom: 220
  },
  img8: {
    position: 'absolute',
    marginStart: 100,
    top: -225
  },
  img9: {
    position: 'absolute',
    marginStart: 195,
    top: -221
  },
  img10: {
    position: 'absolute',
    //marginStart: 265,
    top: -210,
    marginStart: 270,
  },
});

export default HomeScreen;
