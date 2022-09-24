import { useNavigation,useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity,SafeAreaView,BackHandler} from 'react-native';

const Screen10 = (props) => {
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
        },[]),
    );

    return (
        <>
        <SafeAreaView >
        <View>
          <View style={styles.bg1}>
          <TouchableOpacity
             onPress={() => props.navigation.goBack()}>
            <Image style={styles.direct} source={require('../components/images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.txt1}> Payment Method </Text>
            <Separator/>
            </View>
            <View style={styles.bg1}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>
        <View style={styles.bg2}>
          <View>
          <Text style={styles.txt2}>Pay with PayPal</Text>
          <Image style={styles.img1} source={require('../components/images/paypalogo.png')}/>
          <View style={styles.view1}></View>
          <Image style={styles.img2} source={require('../components/images/blankradiobutton.png')}/>

          <Text style={styles.txt3}>Pay with Cash</Text>
          <Image style={styles.img3} source={require('../components/images/cashlogo.png')}/>
          <View style={styles.view2}></View>
          <Image style={styles.img4} source={require('../components/images/darkradiobutton.png')}/>

         </View>

         <Text style={styles.txt4}>Note: This is only an estimated amount and the</Text>
         <Text style={styles.txt5}>final amount will be updated after motorcycle</Text>
         <Text style={styles.txt6}>has been diagnosed.</Text>


         <Text style={styles.txt7}>Order Summary</Text>
         <Text style={styles.txt8}>Subtotal</Text>
         <Text style={styles.txt9}>Est. Tax</Text>
         <Text style={styles.txt10}>Total</Text>
         <Text style={styles.txt11}>S$156.00</Text>
         <Text style={styles.txt12}>S$13.00</Text>
         <Text style={styles.txt13}>S$ 169</Text>
            

        <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen11')}>
            <Text style={styles.appButtonText}>Proceed</Text>  
            </TouchableOpacity>
        </View>



        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
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
       alignSelf:'flex-start',
       height:30,
       width:30,
       left:20,
       top:8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor:'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        textTransform: 'capitalize', 
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        top:17,
        position: 'absolute',
        alignSelf:'center'
      },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:290,
      left:-35,
      top:30,
      marginTop:40,
      marginBottom:60,
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:50,
  },
  fixToText: {
    justifyContent:'center',
    alignSelf:'flex-end',
    position:'absolute',
    bottom:40,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12,
    top:50,
    //elevation:8,
    left:40,
    height:140,
    width:430,
    right:170,
    padding:50,   
    marginTop:420
  },
  bg1:{
    backgroundColor:'#000000'
  },
  bg2:{
    backgroundColor:'#ffffff'
  },
  view1:{
    height:80,
    width:295,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:15,
    margin:3,
    marginStart:30,
    bottom:55
  },
  view2:{
    height:80,
    width:295,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:15,
    margin:3,
    marginStart:30,
    bottom:150
  },
  img1:{
    alignSelf:'flex-start', 
    margin: 10,
    height:40,
    width:40,
    left:35,
    top:17
  },
  img2:{
    alignSelf:'flex-end', 
    margin: 10,
    height:30,
    width:30,
    bottom:125,
    right:40
  },
  img3:{
    alignSelf:'flex-start', 
    margin: 10,
    height:40,
    width:40,
    left:35,
    bottom:80
  },
  img4:{
    alignSelf:'flex-end', 
    margin: 10,
    height:30,
    width:30,
    bottom:220,
    right:40
  },
  txt1:{
    color:'white',
    textTransform:'capitalize',
    fontWeight:'bold',
    fontSize:20,
    position:'absolute',
    alignSelf:'center',
    margin:20,
    paddingEnd:10,
    top:-13
  },  
  txt2:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 95, 
    top: 25
  },
  txt3:{
    color:'black',
    textTransform:'none',
    fontWeight:'500',
    fontSize:18,
    position:'absolute',
    margin:10,
    paddingStart:95,
    top:125
  },
  txt4:{
    bottom:120,
    alignItems:'flex-start',
    color:'grey',
    fontSize:14,
    paddingStart:25,
    fontWeight: '500'
  },
  txt5:{
    bottom:120,
    alignItems:'flex-start',
    color:'grey',
    fontSize:14,
    paddingStart:25,
    fontWeight: '500'
  },
  txt6:{
    bottom:120,
    alignItems:'flex-start',
    color:'grey',
    fontSize:14,
    paddingStart:25,
    fontWeight: '500'
  },
  txt7:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 25, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 15, 
    top: 330
  },
  txt8:{
    bottom:60,
    alignItems:'flex-start',
    color:'black',
    fontSize:18,
    paddingStart:27
  },
  txt9:{
    bottom:50,
    alignItems:'flex-start',
    color:'black',
    fontSize:18,
    paddingStart:27
  },
  txt10:{
    bottom:20,
    alignItems:'flex-start',
    color:'black',
    fontSize:18,
    paddingStart:27,
    fontWeight:'bold'
  },
  txt11:{
    bottom:133,
    alignItems:'flex-start',
    color:'black',
    fontSize:18,
    paddingStart:260
  },
  txt12:{
    bottom:123,
    alignItems:'flex-start',
    color:'black',
    fontSize:18,
    paddingStart:270
  },
  txt13:{
    bottom:94,
    alignItems:'flex-start',
    fontSize:18,
    paddingStart:277,
    color: '#4DB369',
    fontWeight: '800'
  },
  
});

export default Screen10;
