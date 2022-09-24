import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, Modal, BackHandler } from 'react-native';
import { StylesContext } from '@material-ui/styles';
import { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Radio from '../components/others/Radio';
import Radio2 from '../components/others/Radio2';
import Radio3 from '../components/others/Radio3';
import BikeDetails from '../components/modals/BikeDetails';

const Screen7 = (props) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
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
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen8')}>Replacement Bike</Text>
            <Separator />
          </View>

          <View style={styles.bg1}>
            <SafeAreaView style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>
                <Radio />
                <Radio2 />
                <Radio3 />
                <Image source={require('../components/images/bikereplace.png')} style={styles.img}></Image>
                <Text style={styles.txt2} onPress={() => navigation.navigate('Screen8')}>We got you moving.</Text>
                <Text style={styles.txt3}>Would you like to book a replacement bike till we get your vehicle ready?</Text>
                <Text style={styles.txt4}>9 Bikes available for you</Text>

                <View>

                  <Image source={require('../components/images/bike1.png')} style={styles.imgsmall1} ></Image>
                  <Text style={styles.txt1item1}>Class A Bike</Text>
                  <Image source={require('../components/images/dot.png')} style={styles.img1item1}></Image>
                  <Text style={styles.txt2item1}> S$ 39</Text>
                  <Text style={styles.txt3item1}>/</Text>
                  <Text style={styles.txt4item1}>day</Text>
                  <TouchableOpacity
                    onPress={() => { setShowModal(!showModal); }}>
                    <Image source={require('../components/images/infoicon.png')} style={styles.img2item1}></Image>
                  </TouchableOpacity>
                  <Image source={require('../components/images/separator2.png')} style={styles.sep1}></Image>
                </View>

                <View>
                  <Image source={require('../components/images/bike2.png')} style={styles.imgsmall2}></Image>
                  <Text style={styles.txt1item2}>Class B Bike</Text>
                  <Image source={require('../components/images/dot.png')} style={styles.img1item2}></Image>
                  <Text style={styles.txt2item2}> S$ 29</Text>
                  <Text style={styles.txt3item2}>/</Text>
                  <Text style={styles.txt4item2}>day</Text>
                  <Image source={require('../components/images/infoicon.png')} style={styles.img2item2}></Image>
                  <Image source={require('../components/images/separator2.png')} style={styles.sep2}></Image>
                </View>


                <View>
                  <Image source={require('../components/images/bike3.png')} style={styles.imgsmall3}></Image>
                  <Text style={styles.txt1item3}>Class B Bike</Text>
                  <Image source={require('../components/images/dot.png')} style={styles.img1item3}></Image>
                  <Text style={styles.txt2item3}> S$ 29</Text>
                  <Text style={styles.txt3item3}>/</Text>
                  <Text style={styles.txt4item3}>day</Text>
                  <Image source={require('../components/images/infoicon.png')} style={styles.img2item3}></Image>
                  <Image source={require('../components/images/separator2.png')} style={styles.sep3}></Image>
                </View>



                <View style={styles.fixToText}>
                  <TouchableOpacity style={styles.appButtonContainer} >
                    <Text style={styles.appButtonText} onPress={() => { setShowModal(!showModal); }}>Submit</Text>
                  </TouchableOpacity>
                  <Text style={styles.txtbottom1}>$ 169</Text>
                  <Text style={styles.txtbottom2}>1 item</Text>
                  <Text style={styles.txtbottom3}>Inc. of all taxes</Text>
                </View>


                <SafeAreaView style={styles.safearea}>
                  <View style={StylesContext.container}>
                    <Modal animationType={'slide'} transparent={true} visible={showModal} onRequestClose={() => { console.log('Modal has been closed.'); }}>
                      <BikeDetails />
                    </Modal>
                  </View>
                </SafeAreaView>



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
  appButtonText: {
    left: 40,
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    top: 17,
    position: 'absolute',
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
    bottom: 110,
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
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    top: 30,
    elevation: 2,
    left: -10,
    height: 115,
    width: 400,
    right: 170,
    padding: 50,
    marginTop: 540,
    //marginTop: 560,
  },
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec4344',
    marginTop: 120,
    width: 50,
  },
  text: {
    color: '#3f2979',
    marginTop: 10
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
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    alignSelf: 'flex-start',
    margin: 20,
    paddingEnd: 10,
    bottom: 150
  },
  txt3: {
    color: 'black',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: 16,
    position: 'relative',
    alignSelf: 'flex-start',
    margin: 20,
    paddingEnd: 10,
    bottom: 190
  },
  txt4: {
    color: 'grey',
    textTransform: 'none',
    fontWeight: 'normal',
    fontSize: 13,
    position: 'relative',
    alignSelf: 'flex-start',
    margin: 20,
    paddingEnd: 10,
    bottom: 230
  },
  txt1item1: {
    color: 'orange',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 105,
    bottom: 285
  },
  txt2item1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 210,
    bottom: 286
  },
  txt3item1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 246,
    bottom: 285
  },
  txt4item1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 250,
    bottom: 285
  },
  txt1item2: {
    color: 'pink',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 105,
    bottom: 308
  },
  txt2item2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 210,
    bottom: 309
  },
  txt3item2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 246,
    bottom: 308
  },
  txt4item2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 250,
    bottom: 307
  },
  txt1item3: {
    color: 'pink',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 105,
    bottom: 330
  },
  txt2item3: {
    color: 'black',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 210,
    bottom: 331
  },
  txt3item3: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 246,
    bottom: 330
  },
  txt4item3: {
    color: 'black',
    textTransform: 'none',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 250,
    bottom: 330
  },
  txtbottom1: {
    right: 270,
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
    right: 235,
    bottom: 65,
    position: 'absolute'
  },
  txtbottom3: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 'normal',
    position: 'absolute',
    right: 227,
    bottom: 40
  },
  bg1: {
    backgroundColor: '#000000'
  },
  bg2: {
    backgroundColor: '#ffffff'
  },
  safearea: {
    flex: 1,
    marginTop: 600,
    backgroundColor: '#000',
    height: 1000
  },
  img: {
    width: 315,
    height: 200,
    margin: 20,
    borderRadius: 25,
    bottom: 115,
    alignSelf: 'center'
  },
  imgsmall1: {
    position: 'relative',
    margin: 10,
    marginStart: 45,
    bottom: 250,
    height: 60,
    width: 60
  },
  imgsmall2: {
    position: 'relative',
    margin: 10,
    marginStart: 45,
    bottom: 275,
    height: 60,
    width: 60
  },
  imgsmall3: {
    position: 'relative',
    margin: 10,
    marginStart: 45,
    bottom: 300,
    height: 60,
    width: 60
  },
  img1item1: {
    position: 'absolute',
    margin: 10,
    marginStart: 208,
    height: 5,
    width: 5,
    bottom: 292
  },
  img2item1: {
    marginHorizontal: 315,
    height: 25,
    width: 25,
    bottom: 313
  },
  img1item2: {
    position: 'absolute',
    margin: 10,
    marginStart: 208,
    height: 5,
    width: 5,
    bottom: 315
  },
  img2item2: {
    marginHorizontal: 315,
    height: 25,
    width: 25,
    bottom: 338
  },
  img1item3: {
    position: 'absolute',
    margin: 10,
    marginStart: 208,
    height: 5,
    width: 5,
    bottom: 337
  },
  img2item3: {
    marginHorizontal: 315,
    height: 25,
    width: 25,
    bottom: 368
  },
  sep1: {
    position: 'absolute',
    bottom: 265,
    maxWidth: 315,
    start: 20
  },
  sep2: {
    position: 'absolute',
    bottom: 290,
    maxWidth: 315,
    start: 20
  },
  sep3: {
    position: 'absolute',
    bottom: 315,
    maxWidth: 315,
    start: 20
  },
});

export default Screen7;
