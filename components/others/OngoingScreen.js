import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';

const OngoingScreen = ({ navigation }) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView >
        {/* <ScrollView> */}
        <Separator />
        <Separator />

        <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content' />

        <View style={styles.view4}>
          <Text style={styles.txt3}>#13542</Text>
          <View style={styles.view5} />
          <Text style={styles.txt8}>Ongoing</Text>
          <Text style={styles.txt5}>Break oil top up</Text>
          <Text style={styles.txt6}>25 Nov 21, 03:00 - 4:30 PM</Text>
          <Text style={styles.txt7}>$169</Text>
          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer3}
              onPress={() => navigation.navigate('Screen15')}>
              <Text style={styles.appButtonText3}>Call Service Station</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view6}>
          <Text style={styles.txt3}>#13542</Text>
          <View style={styles.view7} />
          <Text style={styles.txt8}>Ongoing</Text>
          <Text style={styles.txt5}>Break oil top up</Text>
          <Text style={styles.txt6}>25 Nov 21, 03:00 - 4:30 PM</Text>
          <Text style={styles.txt7}>$169</Text>
          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer4}
              onPress={() => navigation.navigate('Screen15')}>
              <Text style={styles.appButtonText4}>Confirm Job Updates</Text>
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
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 20,
    top: 108
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText1: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    top: 15,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer1: {
    backgroundColor: "orange",
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 108,
    left: -73,
    top: -71,
    marginTop: -185,
    marginBottom: 700,
    paddingBottom: 30
  },
  appButtonText2: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(255, 92, 92, 1)',
    fontWeight: '500',
    top: 3,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer2: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 245,
    left: -45,
    top: 10,
    marginTop: -185,
    marginBottom: 700,
    borderColor: 'pink',
    borderWidth: 3,
    paddingBottom: 5
  },
  appButtonText3: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(255, 92, 92, 1)',
    fontWeight: '500',
    top: 3,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer3: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 245,
    left: -45,
    top: 10,
    marginTop: -185,
    marginBottom: 700,
    borderColor: 'pink',
    borderWidth: 3,
    paddingBottom: 5
  },
  appButtonText4: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(255, 92, 92, 1)',
    fontWeight: '500',
    top: 3,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer4: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 245,
    left: -45,
    top: 10,
    marginTop: -185,
    marginBottom: 700,
    borderColor: 'pink',
    borderWidth: 3,
    paddingBottom: 5
  },
  appButtonText5: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(255, 92, 92, 1)',
    fontWeight: '500',
    top: 3,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  appButtonContainer5: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 245,
    left: -45,
    top: 10,
    marginTop: -185,
    marginBottom: 700,
    borderColor: 'pink',
    borderWidth: 3,
    paddingBottom: 5
  },
  appButtonText6: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(255, 92, 92, 1)',
    fontWeight: '500',
    top: 3,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer6: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 245,
    left: -45,
    top: 10,
    marginTop: -125,
    marginBottom: 700,
    borderColor: 'pink',
    borderWidth: 3,
    paddingBottom: 5,
    textTransform: 'none'
  },
  boundary: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 50,
    //elevation:8,
    left: 40,
    height: 140,
    width: 430,
    right: 170,
    padding: 50,
    marginTop: 420
  },
  img1: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: -60,
    top: 58
  },
  img2: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: -30,
    top: 28
  },
  img3: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 0,
    top: -2
  },
  img4: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 30,
    top: -32
  },
  img5: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 60,
    top: -62
  },
  view1: {
    height: 55,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 10,
    borderColor: 'grey'
  },
  view2: {
    height: 140,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 20,
    borderColor: 'grey'
  },
  view3: {
    height: 23,
    width: 72,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(222, 238, 255, 1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15
  },
  view4: {
    height: 140,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    //alignSelf:'flex-start',
    alignSelf: 'center',
    //right:-30,
    top: 30,
    borderColor: 'grey'
  },
  view5: {
    height: 23,
    width: 65,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 239, 216, 1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
    left: 222
  },
  view6: {
    height: 140,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    alignSelf: 'center',
    //right: -30,
    top: 40,
    borderColor: 'grey'
  },
  view7: {
    height: 23,
    width: 65,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 239, 216, 1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
    left: 222
  },
  view8: {
    height: 140,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 50,
    borderColor: 'grey'
  },
  view9: {
    height: 23,
    width: 75,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(77, 179, 105, 0.1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
  },
  view10: {
    height: 170,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 60,
    borderColor: 'grey'
  },
  view11: {
    height: 23,
    width: 75,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(77, 179, 105, 0.1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
  },
  view12: {
    height: 100,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 70,
    borderColor: 'grey'
  },
  view13: {
    height: 23,
    width: 75,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(243, 74, 58, 0.1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
  },
  view14: {
    height: 100,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    right: -30,
    top: 80,
    borderColor: 'grey'
  },
  view15: {
    height: 23,
    width: 75,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignSelf: 'flex-start',
    right: -215,
    top: 15,
  },
  txt1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 5,
    alignSelf: 'flex-start',
    left: 115
  },
  txt2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 5,
    alignSelf: 'flex-start',
    left: 195
  },
  txt3: {
    color: '#f2994a',
    textTransform: 'none',
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 10,
    alignSelf: 'flex-start',
    left: 5
  },
  txt4: {
    color: 'rgba(0, 122, 255, 1)',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 8,
    alignSelf: 'flex-end',
    left: 215
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 30,
    alignSelf: 'flex-start',
    left: 5
  },
  txt6: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 50,
    alignSelf: 'flex-start',
    left: 5
  },
  txt7: {
    color: '#f2994a',
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '900',
    position: 'absolute',
    margin: 10,
    top: 45,
    alignSelf: 'flex-end',
    right: 2
  },
  txt8: {
    color: 'rgba(255, 144, 0, 1)',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 8,
    alignSelf: 'flex-end',
    left: 222
  },
  txt9: {
    color: 'rgba(77, 179, 105, 1)',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 8,
    alignSelf: 'flex-end',
    left: 212
  },
  txt10: {
    color: 'rgba(244, 67, 54, 1)',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 8,
    alignSelf: 'flex-end',
    left: 217
  },
  txt11: {
    color: 'black',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    top: 8,
    alignSelf: 'flex-end',
    left: 217
  },

});

export default OngoingScreen;
