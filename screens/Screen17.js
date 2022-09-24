import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView,StatusBar,ScrollView,Image} from 'react-native';

const Screen17 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
        <ScrollView>
        <Separator/>
        <Separator/>

        <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content'/>
         
        <View>
        <Text style={styles.txt1} onPress={() => navigation.navigate('Screen16')}>Close</Text>
        <Text style={styles.txt2}>Edit Profile</Text>
        <Text style={styles.txt3} onPress={() => navigation.navigate('Screen18')}>Save</Text>
        <Image style={styles.img1} source={require('../components/images/profilepic.png')}/>
        <Image style={styles.img2} source={require('../components/images/camera.png')}/>
        </View>

        <View>
        <Text style={styles.txt4}>Name</Text>
        <Text style={styles.txt5}>Alfred Alex</Text>
        
        <Text style={styles.txt6}>Email</Text>
        <Text style={styles.txt7}>alfred@gmail.com</Text>

        <Text style={styles.txt8}>Phone Number</Text>
        <Text style={styles.txt9}>+91 7946132649</Text>

        <Text style={styles.txt10}>Bio</Text>
        <Text style={styles.txt11}>********</Text>

         <View style={styles.fixToText}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen18')}>
            <Text style={styles.appButtonText}>Save</Text>  
          </TouchableOpacity>
        </View>
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
        </ScrollView>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    direct: {
       alignSelf:'center',
       height:30,
       width:30,
       left:140,
       top:176
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
        top:10,
        position: 'absolute',
        alignSelf:'center',
        fontWeight: 'bold'
      },
    appButtonContainer:{
        backgroundColor:"#f2994a",
        borderRadius:15,
        paddingVertical:30,
        paddingHorizontal:12,
        margin: 20,
        width:290,
        left:-40,
        top:10,
        marginTop:355,
        marginBottom:485,
        paddingBottom:17,
  },
  boundary:{
    borderWidth:1,
    borderColor:'pink',
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
  txt1:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: -25,
    alignSelf:'flex-start', 
    left:10 
  },
  txt2:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '900', 
    position: 'absolute', 
    margin: 10, 
    top: -30,
    alignSelf:'center'
  },
  txt3:{ 
    color: 'rgba(0, 122, 255, 1)', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: -25,
    alignSelf:'flex-end',
    right:10 
  },
  txt4:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 50,
    alignSelf:'flex-start',
    left:10 
  },
  txt5:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    top: 70,
    alignSelf:'flex-start',
    left:10 
  },
  txt6:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 120,
    alignSelf:'flex-start',
    left:10 
  },
  txt7:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '700', 
    position: 'absolute', 
    margin: 10, 
    top: 140,
    alignSelf:'flex-start',
    left:10 
  },
  txt8:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 190,
    alignSelf:'flex-start',
    left:10 
  },
  txt9:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '700', 
    position: 'absolute', 
    margin: 10, 
    top: 210,
    alignSelf:'flex-start',
    left:10 
  },
  txt10:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 260,
    alignSelf:'flex-start',
    left:10 
  },
  txt11:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 18, 
    fontWeight: '700', 
    position: 'absolute', 
    margin: 10, 
    top: 280,
    alignSelf:'flex-start',
    left:10
  },
  img1:{
    alignSelf:'center',
    height:100,
    width:100,
    top:40
  },
  img2:{
    alignSelf:'center',
    height:30,
    width:30,
    top:27,
  },
});

export default Screen17;
