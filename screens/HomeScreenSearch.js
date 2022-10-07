import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const HomeScreenSearch = (props) => {
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
        <View>
          <View style={styles.bg1}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}>
              <Image style={styles.direct} source={require('../components/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.txt1} onPress={() => navigation.navigate('Screen5')}
            >Search Services</Text>
            <Separator />
          </View>

          <View style={styles.bg1}>
            <View style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={styles.bg2}>

                <View style={styles.view1}>
                  <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
                    <Image style={styles.img} source={require('../components/images/search.png')} />
                  </TouchableOpacity>
                  <View style={styles.view2}>
                    <TextInput placeholder='Enter Search Text' placeholderTextColor={'#808080'}
                      maxLength={30} style={{ color: '#000' }} value={text} onChangeText={(value) => setText(value)} />
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 5,
                        marginLeft: 273,
                        bottom: 19
                      }}
                      onPress={() => setText("")}
                    >
                      <Image
                        style={{
                          height: 30,
                          width: 30,
                          position: 'absolute'
                        }}
                        source={require("../components/images/crossing.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.bg2}>
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
                <View>
                  <Text style={styles.txt2} onPress={() => navigation.navigate('Screen5')}>Clear Search History</Text>
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
    backgroundColor: '#000000',
  },
  bg2: {
    backgroundColor: '#ffffff',
  },
  txt1: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    bottom: -5
  },
  txt2: {
    color: '#007aff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 15,
    position: 'relative',
    alignSelf: 'center',
    margin: 20,
    paddingEnd: 10,
    top: 80
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    height: 40,
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: 'black',
    backgroundColor: '#f1f1f1'
  },
  view2: {
    height: 40,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: 'black'
  },
  img: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
});

export default HomeScreenSearch;
