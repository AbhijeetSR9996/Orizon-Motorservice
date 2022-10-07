import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';

const Screen16 = ({ navigation }) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView height={1070}>
        <ScrollView>
          <Separator />
          <Separator />

          <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content' />

          <View>
            <Image style={styles.img1} source={require('../components/images/profilepic.png')} />
            <Text style={styles.txt1}>Alfred Alex</Text>
            <Text style={styles.txt2}>alfred@gmail.com</Text>

            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => navigation.navigate('Screen17')}>
                <Text style={styles.appButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.txt3}>Profile</Text>
            <Image style={styles.imglogo1} source={require('../components/images/bikeicon.png')} />
            <Text style={styles.txt4}>My Bikes</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Screen17')}>
              <Image style={styles.imgicon1} source={require('../components/images/forward2.png')} />
            </TouchableOpacity>
            <Image source={require('../components/images/separator2.png')} style={styles.sep1} />
          </View>

          <View>
            <Image style={styles.imglogo2} source={require('../components/images/history.png')} />
            <Text style={styles.txt5}>Active Loans</Text>
            <Image style={styles.imgicon2} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep2} />
          </View>

          <View>
            <Image style={styles.imglogo3} source={require('../components/images/help.png')} />
            <Text style={styles.txt6}>Help Center</Text>
            <Image style={styles.imgicon3} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep3} />
          </View>

          <View>
            <Image style={styles.imglogo4} source={require('../components/images/share.png')} />
            <Text style={styles.txt7}>Share & Earn</Text>
            <Image style={styles.imgicon4} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep4} />
          </View>

          <View>
            <Image style={styles.imglogo5} source={require('../components/images/rating.png')} />
            <Text style={styles.txt8}>Rate us</Text>
            <Image style={styles.imgicon5} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep5} />
          </View>

          <View>
            <Image style={styles.imglogo6} source={require('../components/images/faq.png')} />
            <Text style={styles.txt9}>FAQ's</Text>
            <Image style={styles.imgicon6} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep6} />
          </View>

          <View>
            <Image style={styles.imglogo7} source={require('../components/images/info.png')} />
            <Text style={styles.txt10}>User Information</Text>
            <Image style={styles.imgicon7} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep7} />
          </View>

          <View>
            <Image style={styles.imglogo8} source={require('../components/images/exit.png')} />
            <Text style={styles.txt11}>Logout</Text>
            <Image style={styles.imgicon8} source={require('../components/images/forward2.png')} />
            <Image source={require('../components/images/separator2.png')} style={styles.sep8} />
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: 140,
    top: 176
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: 'rgba(0, 122, 255, 1)',
    top: 5,
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  appButtonContainer: {
    backgroundColor: "rgba(222, 238, 255, 1)",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    margin: 20,
    width: 180,
    //left: 20,
    top: 10,
    marginTop: -185,
    marginBottom: 485,
    borderColor: 'rgba(0, 122, 255, 1)',
    borderWidth: 2,
    paddingBottom: 7,
    alignSelf: 'center'
  },
  boundary: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 50,
    //elevation:8,
    //left:40,
    height: 140,
    width: 430,
    //right:170,
    padding: 50,
    marginTop: 420
  },
  imglogo1: {
    alignSelf: 'center',
    left: -130,
    top: 196,
  },
  imglogo2: {
    alignSelf: 'center',
    height: 25,
    width: 25,
    left: -130,
    top: 218
  },
  imglogo3: {
    alignSelf: 'center',
    height: 27,
    width: 30,
    left: -130,
    top: 233
  },
  imglogo4: {
    alignSelf: 'center',
    height: 25,
    width: 32,
    left: -130,
    top: 245
  },
  imglogo5: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    left: -130,
    top: 260
  },
  imglogo6: {
    alignSelf: 'center',
    height: 30,
    width: 32,
    left: -130,
    top: 275
  },
  imglogo7: {
    alignSelf: 'center',
    height: 29,
    width: 30,
    left: -130,
    top: 290
  },
  imglogo8: {
    alignSelf: 'center',
    height: 29,
    width: 30,
    left: -130,
    top: 305
  },
  imgicon1: {
    alignSelf: 'center',
    left: 140,
    top: 180,
  },
  imgicon2: {
    alignSelf: 'center',
    left: 140,
    top: 200,
  },
  imgicon3: {
    alignSelf: 'center',
    left: 140,
    top: 215,
  },
  imgicon4: {
    alignSelf: 'center',
    left: 140,
    top: 230,
  },
  imgicon5: {
    alignSelf: 'center',
    left: 140,
    top: 231
  },
  imgicon6: {
    alignSelf: 'center',
    left: 140,
    top: 250,
  },
  imgicon7: {
    alignSelf: 'center',
    left: 140,
    top: 268,
  },
  imgicon8: {
    alignSelf: 'center',
    left: 140,
    top: 283,
  },
  img1: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    top: 20
  },
  txt1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '800',
    position: 'absolute',
    margin: 10,
    top: 120,
    alignSelf: 'center'
  },
  txt2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 145,
    alignSelf: 'center',
  },
  txt3: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 150,
    alignSelf: 'flex-start',
    left: 15
  },
  txt4: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 185,
    alignSelf: 'flex-start',
    left: 75
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 210,
    alignSelf: 'flex-start',
    left: 75
  },
  txt6: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 225,
    alignSelf: 'flex-start',
    left: 75
  },
  txt7: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 237,
    alignSelf: 'flex-start',
    left: 75
  },
  txt8: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 255,
    alignSelf: 'flex-start',
    left: 75
  },
  txt9: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 267,
    alignSelf: 'flex-start',
    left: 75
  },
  txt10: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 285,
    alignSelf: 'flex-start',
    left: 75
  },
  txt11: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 300,
    alignSelf: 'flex-start',
    left: 75
  },
  sep1: {
    position: 'absolute',
    top: 225,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep2: {
    position: 'absolute',
    top: 250,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep3: {
    position: 'absolute',
    top: 265,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep4: {
    position: 'absolute',
    top: 280,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep5: {
    position: 'absolute',
    top: 297,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep6: {
    position: 'absolute',
    top: 313,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep7: {
    position: 'absolute',
    top: 327,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
  sep8: {
    position: 'absolute',
    top: 345,
    maxWidth: 305,
    //start: 25
    alignSelf: 'center'
  },
});

export default Screen16;
