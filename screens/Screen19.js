import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView, StatusBar, BackHandler, TouchableOpacity } from 'react-native';

const Screen19 = (props) => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
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
    }, []),
  );

  return (
    <>
      <SafeAreaView >
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <View>
          <View style={styles.bg1}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}>
              <Image style={styles.direct} source={require('../components/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.txthead}
              onPress={() => navigation.navigate('Screen20')}>FAQ's</Text>
            <Separator />
          </View>

          <View style={styles.bg1}>
            <View style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>
                <View style={styles.view1}>
                  <Image style={styles.img1} source={require('../components/images/search.png')} />
                  <View style={styles.view2}>
                    <TextInput placeholder='Search' placeholderTextColor={'#808080'} maxLength={25}
                      style={{ color: '#000', }} value={text} onChangeText={(value) => setText(value)} />
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 15,
                        marginLeft: 271,
                        bottom: 19
                      }}
                      onPress={() => setText("")}
                    >
                      <Image
                        style={{
                          height: 30,
                          width: 30,
                          position: 'absolute',
                        }}
                        source={require("../components/images/crossing.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.bg2}>

                <View>
                  <Text style={styles.txt1}>Morbi mauris nibh enim vestibulum</Text>
                  <Image style={styles.img2} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt2}>Nunc consectetur porttitor dignissim eget</Text>
                  <Image style={styles.img3} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt3}>Urna, consectetur hendrerit tincidunt nunc</Text>
                  <Image style={styles.img4} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt4}>Eget in morbi tellus commodo</Text>
                  <Image style={styles.img5} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt5}>Purus sodales hac neque nunc</Text>
                  <Image style={styles.img6} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt6}>Vel, sed volutpat, nec varius</Text>
                  <Image style={styles.img7} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt7}>Proin posuere ligula aliquet arcu</Text>
                  <Image style={styles.img8} source={require('../components/images/forward2.png')} />

                </View>

                <View>
                  <Text style={styles.txt8}>Vitae volutpar eros, diam nisi</Text>
                  <Image style={styles.img9} source={require('../components/images/forward2.png')} />

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

              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10,
    height: 30,
    width: 30,
    left: 20,
    bottom: -5
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
    borderRadius: 45,
  },
  bg1: {
    backgroundColor: '#000000'
  },
  bg2: {
    backgroundColor: '#ffffff'
  },
  txt1: {
    color: 'white',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    bottom: -5
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    //alignSelf: "center",
    borderWidth: 1.5,
    height: 40,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: 'black',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  view2: {
    height: 40,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: 'black',
  },
  img1: {
    padding: 15,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    left: 5
  },
  img2: {
    alignSelf: 'center',
    left: 160,
    top: 28,
  },
  img3: {
    alignSelf: 'center',
    left: 160,
    top: 62,
  },
  img4: {
    alignSelf: 'center',
    left: 160,
    top: 98,
  },
  img5: {
    alignSelf: 'center',
    left: 160,
    top: 132,
  },
  img6: {
    alignSelf: 'center',
    left: 160,
    top: 166,
  },
  img7: {
    alignSelf: 'center',
    left: 160,
    top: 200,
  },
  img8: {
    alignSelf: 'center',
    left: 160,
    top: 236,
  },
  img9: {
    alignSelf: 'center',
    left: 160,
    top: 271,
  },
  txt1: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 15,
    alignSelf: 'flex-start',
    left: 15
  },
  txt2: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 50,
    alignSelf: 'flex-start',
    left: 15
  },
  txt3: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 85,
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
    top: 120,
    alignSelf: 'flex-start',
    left: 15
  },
  txt5: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 155,
    alignSelf: 'flex-start',
    left: 15
  },
  txt6: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 190,
    alignSelf: 'flex-start',
    left: 15
  },
  txt7: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 225,
    alignSelf: 'flex-start',
    left: 15
  },
  txt8: {
    color: 'black',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    margin: 10,
    top: 260,
    alignSelf: 'flex-start',
    left: 15
  },
  txthead: {
    color: 'white',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    bottom: -5
  }
});

export default Screen19;
