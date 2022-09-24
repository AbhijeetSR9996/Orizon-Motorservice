import React,{useState} from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import Cleartext from './Cleartext';
import Hide from './Hide';
import Hide2 from './Hide2';
import Hide3 from './Hide3';

const Thirdscreen = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

      const [hidePass, setHidePass] = useState(true);

    return (
        <>
        <SafeAreaView style={{marginTop:97}}>
        <View> 
            <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
            <Separator/>
            <Text style={styles.txt1}>Sign up</Text>
            <Separator/>
            <Separator/>
            <Separator/>
            <Text style={styles.txt2} maxLength={50}>Full Name</Text>
            <View style={styles.innerview}>
            <Cleartext/></View>
            <Text style={styles.txt2}>Vehicle Registration Number</Text>
            <View style={styles.innerview}>
            <TextInput placeholder='enter VRN' style={styles.txtin} /></View>
            <Text style={styles.txt2}>Mobile Number</Text>
            <View style={styles.innerview}>
            <Hide/></View>
            <Text style={styles.txt2}>Confirm Mobile Number</Text>
            <View style={styles.innerview}>
            <Hide2/></View>
            <Text style={styles.txt4}>Chassis Number (Optional)</Text>
            <View style={styles.innerview}>
            <Hide3/></View>
            <View style={styles.fixToText}>
            <Separator/>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen4')} >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.txt3} onPress={() => navigation.navigate('Screen2')}>
              Already have an account? Log In instead</Text>
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
        </View>
        </SafeAreaView>
        </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      justifyContent:'center',
      alignSelf:'stretch'
    },
    direct: {
       alignSelf:'flex-start',
       marginStart:10,
       alignSelf:'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize'  
    },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:15,
      paddingHorizontal:12,
      margin: 20,
      marginHorizontal:25,
      bottom:35
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:45,
  },
  bg:{
    backgroundColor:'#000000'
  },
  txt1:{
    alignSelf:'flex-start',
    color:'black',
    textTransform:'none',
    fontWeight:'bold',
    fontSize:30,
    top:30, 
    marginStart:25
  },
  txt2:{
    alignSelf:'flex-start',
    color:'#808080',
    marginLeft:32
  },
  txt3:{
    alignSelf:'center',
    color:'#007aff',
    top:-50
  },
  txt4:{
    alignSelf:'flex-start',
    color:'#808080',
    marginLeft:32
  },
  innerview:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1.5,
    height:40,
    borderRadius:10,
    margin:5,
    marginVertical:10,
    marginHorizontal:25
  },
  txtin:{
    marginHorizontal:10
  },
});

export default Thirdscreen;
