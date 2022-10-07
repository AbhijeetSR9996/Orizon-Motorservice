import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';

const Services = () => {
  return (
    <>
      <ScrollView style={styles.ScrollViewContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.ImageContain}>
          <Text style={styles.txt1}>Chain Lubrication</Text>
          <Text style={styles.txt2}>RE classic 350</Text>
          <Text style={styles.txt3}>Cleande and lubricated</Text>
          {/* <Text style={styles.txt4}>$ 39</Text> */}
          <Text style={styles.txt5}>Disc pad replacement</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Services;

const styles = StyleSheet.create({
  ScrollViewContainer: {
    backgroundColor: '#f0f0f0',
    margin: 15,
    bottom: 30,
    width: 300,
    //marginLeft: 30,
    alignSelf: "center",
    marginHorizontal: '3.5%'
  },
  ImageContain: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 5,
    paddingBottom: 90,
  },
  txt1: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 5,
    top: 40,
  },
  txt2: {
    color: 'grey',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    paddingStart: 10,
    top: 70,
  },
  txt3: {
    color: '#F2994A',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    margin: 10,
    paddingStart: 157,
    top: 70,
  },
  txt4: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    paddingStart: 103,
    top: 60,
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    margin: 10,
    paddingStart: 8,
    top: 40,
  },
});

{
  /*<ScrollView style={styles.ScrollViewContainer}>
<Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '600', position: 'absolute', margin: 10, paddingStart: 25, top: -20 }}>Chain Lubrication</Text>
          <Text style={{ color: 'grey', textTransform: 'none', fontSize: 13, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 27, top: 10 }}>RE classic 350</Text>
          <Text style={{ color: '#F2994A', textTransform: 'none', fontSize: 13, fontWeight: 'normal', position: 'absolute', margin: 10, paddingStart: 27, top: 30 }}>Cleande and lubricated</Text>
          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '800', position: 'absolute', margin: 10, paddingStart: 270, top: 5 }}>$ 39</Text>
          
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 45,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:45 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:45 , left:10}}></Image>
          
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:140 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:140 , left:10}}></Image>

          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '600', position: 'absolute', margin: 10, paddingStart: 25, top: 70 }}>Disc pad replacement</Text>
          <Text style={{ color: 'grey', textTransform: 'none', fontSize: 13, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 27, top: 105 }}>RE classic 350</Text>
          <Text style={{ color: '#F2994A', textTransform: 'none', fontSize: 13, fontWeight: 'normal', position: 'absolute', margin: 10, paddingStart: 25, top: 125 }}>Replaced</Text>
          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '800', position: 'absolute', margin: 10, paddingStart: 270, top: 100 }}>$ 10</Text>
</ScrollView>}*/
}
