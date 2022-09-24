import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,StatusBar,BackHandler} from 'react-native';
import { useNavigation,useFocusEffect } from '@react-navigation/native';

const Screen12 = (props) => {
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
        <SafeAreaView>
        <TouchableOpacity
             onPress={() => props.navigation.goBack()}>
            <Image style={styles.direct} source={require('../components/images/back2.png')}/>
            </TouchableOpacity>
              <Separator/>
              <Separator/>

            <StatusBar backgroundColor='#f1f1f1' barStyle='dark-content'/>

         <Image style={styles.img} source={require('../components/images/ticklogo.png')}/>
         <Text style={styles.txt1}>Your Services has</Text>
         <Text style={styles.txt2}>been booked</Text>
         <Text style={styles.txt3}>Orizon team will accept your booking for</Text>
         <Text style={styles.txt4}>confirmation.</Text>

        <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer1} onPress={() => navigation.navigate('Screen11')}>
        <Text style={styles.appButtonText1}>Show Bookings</Text>  
        </TouchableOpacity>
        </View>

        <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer2} onPress={() => navigation.navigate('Screen13')}>
            <Text style={styles.appButtonText2}>Back to Home</Text>  
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
      appButtonText1:{
        textTransform: 'capitalize', 
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        top:17,
        position: 'absolute',
        alignSelf:'center'       
      },
      appButtonContainer1:{
          backgroundColor:"#f2994a",
          borderRadius:15,
          paddingVertical:30,
          paddingHorizontal:12,
          margin: 20,
          width:230,
          left:-5,
          top:10,
          marginTop:40,
          marginBottom:150,
  },
      appButtonText2:{
          textTransform: 'none', 
          fontSize: 18,
          color: 'white',
          fontWeight: 'bold',
          top:17,
          position: 'absolute',
          alignSelf:'center'
  },
      appButtonContainer2:{
          backgroundColor:"#f2994a",
          borderRadius:15,
          paddingVertical:30,
          paddingHorizontal:12,
          margin: 20,
          width:230,
          left:-5,
          top:90,
          marginTop:40,
          marginBottom:150,
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
  img:{
    alignSelf:'center', 
    margin: 10,
    top:17,
    height:200,
    width:200
},
  txt1:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 25, 
    fontWeight: '900', 
    position: 'absolute', 
    margin: 10, 
    top: 310,
    alignSelf:'center' 
},
  txt2:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 25, 
    fontWeight: '900', 
    position: 'absolute', 
    margin: 10, 
    top: 335,
    alignSelf:'center' 
},
  txt3:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    top: 380,
    alignSelf:'center' 
  },
  txt4:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    top: 400,
    alignSelf:'center' 
  },
});

export default Screen12;
