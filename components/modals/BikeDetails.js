import React,{useState} from 'react';
import {View,TouchableOpacity,Text,TextInput,
  StyleSheet, SafeAreaView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BikeDetails = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );  
  const [showModal,setShowModal] = useState(true);
  return (
        <>
        <View style={styles.modalboundary}>
        <View style={styles.modal}>
            <Image source={require('../images/bigbike.png')} style={styles.imgmodal1}></Image>
            <Image source={require('../images/bigbikepart.png')} style={styles.imgmodal2}></Image>
            <Text style={styles.txtmodal1}>Continental GT </Text>
            <Text style={styles.txtmodal2}>650 CC - Black</Text>
                <Text style={styles.txtmodal3}>VRN</Text>
                <Text style={styles.txtmodal4}>Run till now</Text>
                <Text style={styles.txtmodal5}>Cost per day</Text>
                <Text style={styles.txtmodal6}>Cubic Capacity</Text>
                <Text style={styles.txtmodal7}>0-60kmph</Text>
                <Text style={styles.txtmodal8}>5478456541</Text>
                <Text style={styles.txtmodal9}>5000 km</Text>
                <Text style={styles.txtmodal10}>S$16.00</Text>
                <Text style={styles.txtmodal11}>650cc</Text>
                <Text style={styles.txtmodal12}>4.5s</Text>
                <Separator/>
                <Text style={styles.txtmodal13}
                onPress={() => navigation.navigate('Screen8')}>Terms & Conditions</Text>
                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                </View>
                </View>
        </>
    );
};

const styles = StyleSheet.create({
    modalboundary:{
        marginTop:100,
        marginBottom:400,
        borderWidth:3,
        borderColor:'#f0f0f0',
        backgroundColor:'#fff',
        borderRadius:45,
        paddingBottom:90
    },
    modal:{
        flex:0,
        alignItems:'center',
        backgroundColor:'00ff00',
        padding:100,
        marginTop:50,
        margin:0
    },
    imgmodal1:{
        width: 300, 
        height: 200, 
        margin: 10, 
        borderRadius: 25,
        marginTop:-110
   },
    imgmodal2:{ 
        width: 300, 
        height: 50,
        bottom:60,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
  },
    txtmodal1:{
        bottom:100,
        alignSelf:'flex-start',
        color:'white',
        fontSize:18,
        position:'relative',
        end:40
    },
    txtmodal2:{
        bottom:125,
        alignSelf:'flex-end',
        color:'white',
        fontSize:18,
        position:'relative',
        start:40
    },
    txtmodal3:{
        bottom:70,
        alignItems:'flex-start',
        color:'black',
        right:130,
        fontSize:18
    },
    txtmodal4:{
        bottom:60,
        alignItems:'flex-start',
        color:'black',
        right:102,
        fontSize:18
    },
    txtmodal5:{
        bottom:50,
        alignItems:'flex-start',
        color:'black',
        right:98,
        fontWeight:'bold',
        fontSize:18
    },
    txtmodal6:{
        bottom:40,
        alignItems:'flex-start',
        color:'black',
        right:89,
        fontSize:18
    },
    txtmodal7:{
        bottom:30,
        alignItems:'flex-start',
        color:'black',
        right:108,
        fontSize:18
    },
    txtmodal8:{
        top:-192.5,
        alignSelf:'flex-start',
        color:'black',
        left:127,
        fontSize:18
    },
    txtmodal9:{
        top:-182.5,
        alignSelf:'flex-end',
        color:'black',
        left:65,
        fontSize:18
    },
    txtmodal10:{
        top:-172.5,
        alignSelf:'flex-end',
        color:'black',
        left:70,
        fontWeight:'bold',
        fontSize:18
    },
    txtmodal11:{
        top:-162.5,
        alignSelf:'flex-end',
        color:'black',
        left:70,
        fontSize:18
    },
    txtmodal12:{
        top:-152.5,
        alignSelf:'flex-end',
        color:'black',
        left:70,
        fontSize:18
    },
    txtmodal13:{
        bottom:140,
        alignSelf:'center',
        color:'rgba(0, 122, 255, 1)', 
        fontSize:13
    },
});

export default BikeDetails;
