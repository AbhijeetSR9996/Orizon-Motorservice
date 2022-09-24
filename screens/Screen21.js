import { useNavigation,useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import {View,Image,StyleSheet,Text,SafeAreaView,TouchableOpacity,BackHandler} from 'react-native';
import Services from '../components/others/Services';

const Screen21 = (props) => {
  const navigation = useNavigation();
  const Separator = () => <View style={styles.separator} />;
  
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
    },[]),
  );  

  return (
    <>
      <SafeAreaView>
        <View>
          <View style={styles.bg1}>
          <TouchableOpacity
             onPress={() => props.navigation.goBack()}>
            <Image              
              style={styles.direct} source={require('../components/images/back.png')}/>
              </TouchableOpacity>
            <Text
              style={styles.txt1}
              onPress={() => navigation.navigate('Screen20')}>#13542</Text>
            <Separator />
          </View>
          <View style={styles.bg1}>
            <SafeAreaView style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>
                <Services />

                <View>
                  <Text style={styles.txt2}>Order Summary</Text>
                  <Text style={styles.txt3}>Completed on</Text>
                  <Text style={styles.txt4}>Subtotal</Text>
                  <Text style={styles.txt5}>Paid Advance</Text>
                  <Text style={styles.txt6}>Total Paid</Text>
                  <Text style={styles.txt7}>Next Service Due on</Text>
                  <Text style={styles.txt8}>Oil change mileage</Text>
                  <Text style={styles.txt9}>02/11/2021</Text>
                  <Text style={styles.txt10}>S$156.00</Text>
                  <Text style={styles.txt11}>S$13.00</Text>
                  <Text style={styles.txt12}>S$156.00</Text>
                  <Text style={styles.txt13}>S$ 169</Text>
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
    top: 8,
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
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 20,
    elevation: 8,
    left: 40,
    height: 120,
    width: 430,
    right: 170,
    padding: 50,
    marginTop: 410,
  },
  bg1:{
    backgroundColor:'#000000'
  },
  bg2:{
    backgroundColor:'#ffffff'
  },
  txt1:{
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    top: -13,
  },
  txt2:{
      color: 'black',
      textTransform: 'capitalize',
      fontSize: 20,
      fontWeight: '800',
      position: 'absolute',
      margin: 10,
      paddingStart: 23,
      top: 130,
  },
  txt3:{
    top: 220,
    alignItems: 'flex-start',
    color: 'black',
    fontSize: 17,
    paddingStart: 34,
  },
  txt4:{
    top: 225,
    alignItems: 'flex-start',
    color: 'black',
    fontSize: 17,
    paddingStart: 34,
  },
  txt5:{
    top: 230,
    alignItems: 'flex-start',
    color: 'black',
    fontSize: 17,
    paddingStart: 34,
  },
  txt6:{
      top: 235,
      alignItems: 'flex-start',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 17,
      paddingStart: 34,
  },
  txt7:{
      top: 240,
      alignItems: 'flex-start',
      color: 'black',
      fontSize: 17,
      paddingStart: 35,
  },
  txt8:{
    top: 245,
    alignItems: 'flex-start',
    color: 'black',
    fontWeight: '600',
    fontSize: 17,
    paddingStart: 35,
  },
  txt9:{
      top: 82,
      alignItems: 'flex-end',
      color: 'black',
      fontSize: 17,
      paddingStart: 240,
  },
  txt10:{
      top: 88,
      alignItems: 'flex-end',
      color: 'black',
      fontSize: 17,
      paddingStart: 257,
  },
  txt11:{
      top: 94,
      alignItems: 'flex-end',
      color: 'black',
      fontSize: 17,
      paddingStart: 267,
  },
  txt12:{
      top: 100,
      alignItems: 'flex-end',
      color: 'black',
      fontSize: 17,
      paddingStart: 257,
  },
  txt13:{
      top: 106,
      alignItems: 'flex-end',
      color: '#4DB369',
      fontWeight: '800',
      fontSize: 17,
      paddingStart: 274,
  },
});

export default Screen21;
