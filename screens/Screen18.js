import { useNavigation,useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar,BackHandler} from 'react-native';

const Screen18 = (props) => {
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
        <TouchableOpacity
             onPress={() => props.navigation.goBack()}>
            <Image style={styles.direct} source={require('../components/images/back2.png')}/>
            </TouchableOpacity>
              <Separator/>
              <Separator/>

            <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content'/>

         <Image style={styles.img1} source={require('../components/images/piggybankbg.png')}/>
         <Image style={styles.img2} source={require('../components/images/piggybank.png')}/>
         <Text style={styles.txt1}>Share with friends</Text>
         <Text style={styles.txt2}>Refer to a friend and earn $5</Text>
         <Text style={styles.txt3}>cash reward.</Text>

        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen19')}>
            <Text style={styles.appButtonText}>Share Now</Text>  
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
        width:230,
        left:-5,
        top:10,
        marginTop:40,
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
  img1:{
    alignSelf:'center', 
    margin: 10,
    top:17,
    height:170,
    width:250
  },
  img2:{
    alignSelf:'center', 
    margin: 10,
    top:-167,
    height:150,
    width:150
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
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 350,
    alignSelf:'center' 
  },
  txt3:{
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: '500', 
    position: 'absolute', 
    margin: 10, 
    top: 375,
    alignSelf:'center' 
  },
});

export default Screen18;
