import { useNavigation,useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, StyleSheet, Text,TouchableOpacity,SafeAreaView,BackHandler} from 'react-native';

const Screen20 = (props) => {
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
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen21')}> #13542 </Text>
            <Separator/>
            </View>
            <View style={styles.bg1}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>
        <View style={styles.bg2}>
          <View>
          <Text style={styles.txt2}>Chain Lubrication</Text>
          <Text style={styles.txt3}>RE classic 350</Text>
          <Text style={styles.txt4}>Cleande and lubricated</Text>
          <Text style={styles.txt5}>$ 39</Text>
          <Image source={require('../components/images/separator2.png')} style={styles.sep1}/>

          <Text style={styles.txt6}>Disc pad replacement</Text>
          <Text style={styles.txt7}>RE classic 350</Text>
          <Text style={styles.txt8}>Replaced</Text>
          <Text style={styles.txt9}>$ 10</Text>
          <Image source={require('../components/images/separator2.png')} style={styles.sep2}/>
          
        </View> 

        <Text style={styles.txt10}>Order Summary</Text>
         <Text style={styles.txt11}>Subtotal</Text>
         <Text style={styles.txt12}>Paid Advance</Text>
         <Text style={styles.txt13}>To Pay</Text>
         <Text style={styles.txt14}>Est. Tax</Text>
         <Text style={styles.txt15}>Total</Text>

         <Text style={styles.txt16}>S$156.00</Text>
         <Text style={styles.txt17}>S$13.00</Text>
         <Text style={styles.txt18}>S$13.00</Text>
         <Text style={styles.txt19}>S$0.00</Text>
         <Text style={styles.txt20}>S$ 169</Text>

         <Text style={styles.txt21}>We've sent a copy of this bill to your email id</Text>
         <Text style={styles.txt22}>support@orizonsingapore.com</Text>

         <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} 
              onPress={() => navigation.navigate('Screen21')}>
              <Text style={styles.appButtonText}>Pay and Complete</Text>  
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
        backgroundColor:"#f2994a",
        borderRadius:15,
        paddingVertical:30,
        paddingHorizontal:12,
        margin: 20,
        width:290,
        left:35,
        top:10,
        marginTop:-170,
        marginBottom:180,
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
    position:'relative',
    bottom:20,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12,
    top:20,
    elevation:8,
    left:40,
    height:120,
    width:430,
    right:170,
    padding:50,   
    marginTop:410
  },
  bg1:{
    backgroundColor:'#000000'
  },
  bg2:{
    backgroundColor:'#ffffff'
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
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '600', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: -20 
  },
  txt3:{ 
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 27, 
    top: 10 
  },
  txt4:{
    color: '#F2994A', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'normal', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 27, 
    top: 30 
  },
  txt5:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 270, 
    top: 5 
  },
  txt6:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '600', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: 70 
  },
  txt7:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 27, 
    top: 105 
  },
  txt8:{
    color: '#F2994A', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'normal', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: 125 
  },
  txt9:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 270, 
    top: 100 
  },
  txt10:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 20, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 23, 
    top: 170 
  },
  txt11:{
    top:220,
    alignItems:'flex-start',
    color:'black',
    fontSize:17,
    paddingStart:34
  },
  txt12:{
    top:225,
    alignItems:'flex-start',
    color:'black',
    fontSize:17,
    paddingStart:34
  }, 
  txt13:{
    top:230,
    alignItems:'flex-start',
    color:'black',
    fontWeight:'bold',
    fontSize:17,
    paddingStart:35
  },
  txt14:{
    top:235,
    alignItems:'flex-start',
    color:'black',
    fontSize:17,
    paddingStart:35
  },
  txt15:{
    top:240,
    alignItems:'flex-start',
    color:'black',
    fontWeight:'600',
    fontSize:17,
    paddingStart:35
  },
  txt16:{
    top:105,
    alignItems:'flex-end',
    color:'black',
    fontSize:18,
    paddingStart:240
  },
  txt17:{
    top:107,
    alignItems:'flex-end',
    color:'black',
    fontSize:18,
    paddingStart:250
  },
  txt18:{
    top:109,
    alignItems:'flex-end',
    color:'black',
    fontSize:18,
    paddingStart:250
  },
  txt19:{
    top:111,
    alignItems:'flex-end',
    color:'black',
    fontSize:18,
    paddingStart:260
  },
  txt20:{
    top:113,
    alignItems:'flex-end',
    color: '#4DB369',
    fontWeight: '800',
    fontSize:18,
    paddingStart:257
  },
  txt21:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 12, 
    fontWeight: '300', 
    position: 'absolute', 
    margin: 10, 
    top: 485,
    alignSelf:'center' 
  },
  txt22:{
    color: '#f2994a', 
    textTransform: 'lowercase', 
    fontSize: 12, 
    fontWeight: '300', 
    position: 'absolute', 
    margin: 10, 
    top: 498,
    alignSelf:'center',
    textDecorationLine:'underline' 
  },
  sep1:{
    position: 'absolute', 
    top:60,
    maxWidth:305,
    start:25 
  },
  sep2:{
    position: 'absolute', 
    top:155,
    maxWidth:305,
    start:25 
  },
});

export default Screen20;
