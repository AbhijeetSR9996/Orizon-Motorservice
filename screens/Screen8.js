import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, BackHandler } from 'react-native';
import UploadImage from '../components/others/UploadImage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-neat-date-picker';
import Moment from 'moment';

const Screen8 = (props) => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );

  const [showDatePickers, setShowDatePickers] = React.useState(false);
  const openDatePickers = () => { setShowDatePickers(false) }
  const onCancels = () => { setShowDatePickers(false) }
  const [dateofbirth, setDateOfBirth] = React.useState([]);

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
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen9')}> Service Details</Text>
            <Separator />
          </View>
          <View style={styles.bg1}>
            <SafeAreaView style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>
                <View>
                  <Text style={styles.txt2}>Last Service Date</Text>
                  {/* <Text style={styles.txt3}> --/--/----</Text> */}
                  <Text style={styles.txt3}> {Moment(dateofbirth).format('DD/MM/YYYY')}</Text>

                  <TouchableOpacity onPress={openDatePickers}>
                    <Image style={styles.img1} source={require('../components/images/calendar.png')} />
                  </TouchableOpacity>
                  {/* <DatePicker isVisible={showDatePickers} mode={'single'} onCancel={onCancels}
                    onConfirm={(dob) => { setShowDatePickers(false); setDateOfBirth(dob.dateString) }} /> */}

                  <Image source={require('../components/images/separator2.png')} style={styles.sep1}></Image>

                  <Text style={styles.txt4}>Last oil change mileage</Text>
                  <Text style={styles.txt5}> 123456 KM </Text>
                  <Image source={require('../components/images/separator2.png')} style={styles.sep2}></Image>

                  <Text style={styles.txt6}>Description</Text>
                  <Text style={styles.txt7}> Please elaborate your service request. </Text>
                  <Image source={require('../components/images/separator2.png')} style={styles.sep3}></Image>

                  <Text style={styles.txt8}>Upload Photos & Videos</Text>

                  <View style={styles.fixToText}>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen9')}>
                      <Text style={styles.appButtonText}>Submit Request</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtbottom1}>$ 169</Text>
                    <Text style={styles.txtbottom2}>1 item</Text>
                    <Text style={styles.txtbottom3}>Inc. of all taxes</Text>
                  </View>
                  <View>
                    <Image style={styles.img2} source={require('../components/images/openvan.png')} />
                    <Image style={styles.img3} source={require('../components/images/openvan.png')} />
                    <UploadImage />
                    <Text style={styles.txt9}>Add More</Text>
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
  appButtonText: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    top: 17,
    position: 'absolute',
    left: 25
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 12,
    margin: -20,
    width: 180,
    left: 200,
    top: 20,
    //marginTop: 40,
    marginTop: 200,
    marginBottom: 60,
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
    //elevation:8,
    left: 40,
    height: 120,
    width: 430,
    right: 170,
    padding: 50,
    marginTop: 440
  },
  bg1: {
    backgroundColor: '#000000'
  },
  bg2: {
    backgroundColor: '#ffffff'
  },
  txtbottom1: {
    right: 305,
    textTransform: 'capitalize',
    fontSize: 22,
    color: '#4DB369',
    fontWeight: '800',
    //bottom: 60,
    bottom: -30,
    position: 'absolute',
  },
  txtbottom2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 10,
    fontWeight: 'normal',
    right: 270,
    //bottom: 65,
    bottom: -25,
    position: 'absolute',
  },
  txtbottom3: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 'normal',
    position: 'absolute',
    right: 278,
    //bottom: 40,
    bottom: -50,
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
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 23,
    top: 10
  },
  txt4: {
    color: 'grey',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 65
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 22,
    top: 95
  },
  txt6: {
    color: 'grey',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 150
  },
  txt7: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 22,
    top: 180
  },
  txt8: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    paddingStart: 25,
    top: 265
  },
  txt9: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    bottom: 160,
    top: -450,
    left: 262,
    textTransform: 'none'
  },
  img1: {
    alignSelf: 'flex-end',
    margin: 10,
    height: 25,
    width: 25,
    right: 50,
    top: 7
  },
  img2: {
    alignSelf: 'flex-start',
    height: 50,
    width: 100,
    left: 35,
    bottom: 280,
    borderWidth: 5,
    borderColor: '#f1f1f1',
    paddingBottom: 80
  },
  img3: {
    alignSelf: 'flex-start',
    height: 50,
    width: 100,
    left: 140,
    bottom: 370,
    borderWidth: 5,
    borderColor: '#f1f1f1',
    paddingBottom: 80
  },
  sep1: {
    position: 'absolute',
    top: 45,
    maxWidth: 295,
    start: 35
  },
  sep2: {
    position: 'absolute',
    top: 125,
    maxWidth: 295,
    start: 35
  },
  sep3: {
    position: 'absolute',
    top: 210,
    maxWidth: 295,
    start: 35
  },
});

export default Screen8;
