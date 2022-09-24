import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Screen6 = (props) => {
  const navigation = useNavigation();

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
    <>
      <SafeAreaView >
        <View>
          <View style={styles.bg1}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}>
              <Image style={styles.direct} source={require('../components/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen7')}> General Servicing</Text>
            <Separator />
          </View>
          <View style={styles.bg1}>
            <SafeAreaView style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>
                <View>
                  <Text style={styles.txt2}>Oil Change</Text>
                  <Image style={styles.imgclock1} source={require('../components/images/clock.png')} />
                  <Text style={styles.txttime1}> 20 min</Text>
                  <Text style={styles.txtmore1}>More info</Text>
                  <Text style={styles.txtcost1}>$ 39</Text>
                  <Image style={styles.imgadd1} source={require('../components/images/add.png')} />
                  <Image source={require('../components/images/separator2.png')} style={styles.sep1}></Image>

                  <Text style={styles.txt3}>Wash</Text>
                  <Image style={styles.imgclock2} source={require('../components/images/clock.png')} />
                  <Text style={styles.txttime2}> 20 min</Text>
                  <Text style={styles.txtmore2}>More info</Text>
                  <Text style={styles.txtcost2}>$ 39</Text>
                  <Image style={styles.imgadd2} source={require('../components/images/subtract.png')} />
                  <Image source={require('../components/images/separator2.png')} style={styles.sep2}></Image>

                  <Text style={styles.txt4}>Air Filter Replacement</Text>
                  <Image style={styles.imgclock3} source={require('../components/images/clock.png')} />
                  <Text style={styles.txttime3}> 20 min</Text>
                  <Text style={styles.txtmore3}>More info</Text>
                  <Text style={styles.txtcost3}>$ 39</Text>
                  <Image style={styles.imgadd3} source={require('../components/images/add.png')} />
                  <Image source={require('../components/images/separator2.png')} style={styles.sep3}></Image>

                  <Text style={styles.txt5}>Exhaust Cleaning</Text>
                  <Image style={styles.imgclock4} source={require('../components/images/clock.png')} />
                  <Text style={styles.txttime4}> 20 min</Text>
                  <Text style={styles.txtmore4}>More info</Text>
                  <Text style={styles.txtcost4}>$ 39</Text>
                  <Image style={styles.imgadd4} source={require('../components/images/add.png')} />
                  <Image source={require('../components/images/separator2.png')} style={styles.sep4}></Image>

                  <Text style={styles.txt6}>Chain Lubrication</Text>
                  <Image style={styles.imgclock5} source={require('../components/images/clock.png')} />
                  <Text style={styles.txttime5}> 20 min</Text>
                  <Text style={styles.txtmore5}>More info</Text>
                  <Text style={styles.txtcost5}>$ 39</Text>
                  <Image style={styles.imgadd5} source={require('../components/images/add.png')} />
                  <Image source={require('../components/images/separator2.png')} style={styles.sep5}></Image>

                  <View style={styles.fixToText}>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen7')}>
                      <Text style={styles.appButtonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtbottom1}>$ 169</Text>
                    <Text style={styles.txtbottom2}>1 item</Text>
                    <Text style={styles.txtbottom3}>Inc. of all taxes</Text>
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
              </View>
            </SafeAreaView>
          </View>
        </View>
      </SafeAreaView>
    </>
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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 12,
    margin: 20,
    width: 140,
    left: 190,
    top: 10,
    marginTop: 40,
    marginBottom: 60,
  },
  appButtonText: {
    left: 40,
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    top: 17,
    position: 'absolute',
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 10,
    elevation: 2,
    left: 40,
    height: 120,
    width: 430,
    right: 170,
    padding: 50,
    //marginTop: 60
    marginTop: 148
  },
  bg1: {
    backgroundColor: '#000000'
  },
  bg2: {
    backgroundColor: '#ffffff'
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
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: -20
  },
  txt3: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 75
  },
  txt4: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 170
  },
  txt5: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 265
  },
  txt6: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 360
  },
  txttime1: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 40,
    top: 10
  },
  txttime2: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 40,
    top: 105
  },
  txttime3: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 40,
    top: 200
  },
  txttime4: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 40,
    top: 295
  },
  txttime5: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 40,
    top: 390
  },
  txtmore1: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 30
  },
  txtmore2: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 125
  },
  txtmore3: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 220
  },
  txtmore4: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 315
  },
  txtmore5: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 410
  },
  txtcost1: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 260,
    top: 5
  },
  txtcost2: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 260,
    top: 100
  },
  txtcost3: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 260,
    top: 195
  },
  txtcost4: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 260,
    top: 290
  },
  txtcost5: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 260,
    top: 385
  },
  txtbottom1: {
    right: 295,
    textTransform: 'capitalize',
    fontSize: 22,
    color: '#4DB369',
    fontWeight: '800',
    bottom: 60,
    position: 'absolute',
  },
  txtbottom2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 10,
    fontWeight: 'normal',
    right: 260,
    bottom: 65,
    position: 'absolute'
  },
  txtbottom3: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 'normal',
    position: 'absolute',
    right: 252,
    bottom: 40
  },
  imgclock1: {
    alignSelf: 'flex-start',
    margin: 10,
    height: 15,
    width: 15,
    left: 25,
    top: 12
  },
  imgclock2: {
    alignSelf: 'flex-start',
    margin: 10,
    height: 15,
    width: 15,
    left: 25,
    top: 22
  },
  imgclock3: {
    alignSelf: 'flex-start',
    margin: 10,
    height: 15,
    width: 15,
    left: 25,
    top: 32
  },
  imgclock4: {
    alignSelf: 'flex-start',
    margin: 10,
    height: 15,
    width: 15,
    left: 25,
    top: 42
  },
  imgclock5: {
    alignSelf: 'flex-start',
    margin: 10,
    height: 15,
    width: 15,
    left: 25,
    top: 52
  },
  imgadd1: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 30,
    width: 30,
    right: 20,
    bottom: 33
  },
  imgadd2: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 30,
    width: 30,
    right: 20,
    bottom: 23
  },
  imgadd3: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 30,
    width: 30,
    right: 20,
    bottom: 13
  },
  imgadd4: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 30,
    width: 30,
    right: 20,
    bottom: 3
  },
  imgadd5: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 30,
    width: 30,
    right: 20,
    bottom: -8
  },
  sep1: {
    position: 'absolute',
    top: 62,
    maxWidth: 315,
    start: 35
  },
  sep2: {
    position: 'absolute',
    top: 158,
    maxWidth: 315,
    start: 35
  },
  sep3: {
    position: 'absolute',
    top: 254,
    maxWidth: 315,
    start: 35
  },
  sep4: {
    position: 'absolute',
    top: 348,
    maxWidth: 315,
    start: 35
  },
  sep5: {
    position: 'absolute',
    top: 444,
    maxWidth: 315,
    start: 35
  },
});

export default Screen6;
