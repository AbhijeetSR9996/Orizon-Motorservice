import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import Hide from '../components/others/Hide';
import Screen6 from './Screen6';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const Screen2 = ({ navigation }) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  const [hidePass, setHidePass] = useState(true);
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const getResponseInfo = (error, result) => {
    if (error) {

      alert('Error fetching data: ' + error.toString());
    } else {

      console.log(JSON.stringify(result));
      setUserName('Welcome ' + result.name);
      setToken('User Token: ' + result.id);
      setProfilePic(result.picture.data.url);
    }
  };

  const onLogout = () => {

    setUserName(null);
    setToken(null);
    setProfilePic(null);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <View style={styles.bg} >
            <Image style={styles.direct} source={require('../components/images/logoout.png')} />
            <Separator />
          </View>
          <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
              <Separator />

              <Text style={styles.txt1}>Log In</Text>
              <Separator />
              <Separator />
              <Separator />
              <View style={styles.innerview}>
                <Hide />
              </View>
              <View style={styles.fixToText}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen4')} >
                  <Text style={styles.appButtonText}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.txt3}>Forgot password?</Text>
                <Separator />
                <Text style={styles.txt4} onPress={() => navigation.navigate('Screen3')}>Sign Up</Text>
                <Separator />
                <Text style={[styles.txt4, { color: '#808080' }]}>Or sign-in with</Text>
                <Separator />

                <View style={{ alignSelf: "center", marginTop: '1%' }}>
                  <LoginButton style={{ width: 31, height: 30, bottom: '-3%', elevation: 3, }}
                    readPermissions={['public_profile']}
                    onLoginFinished={(error, result) => {
                      if (error) {
                        alert(error);
                        console.log('Login has error: ' + result.error);
                      } else if (result.isCancelled) {
                        alert('Login is cancelled.');
                      } else {
                        AccessToken.getCurrentAccessToken().then((data) => {
                          console.log(data.accessToken.toString());
                          const processRequest = new GraphRequest(
                            '/me?fields=name,picture.type(large)',
                            null,
                            getResponseInfo,
                          );

                          new GraphRequestManager()
                            .addRequest(processRequest).start();
                        });
                      }
                    }}
                    onLogoutFinished={onLogout}
                  />
                  <Text style={{ bottom: 35, left: 41, color: '#000' }}>|</Text>
                  <Text style={{ bottom: 42.5, left: 41, color: '#000' }}>|</Text>
                  <Text style={{ bottom: 50, left: 41, color: '#000' }}>|</Text>
                  <Screen6 />
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
              </View>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: -20
  },
  direct: {
    alignSelf: 'flex-start',
    marginStart: 10,
    alignSelf: 'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
  },
  appButtonText2: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 25
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 25
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 45,
  },
  bg: {
    backgroundColor: '#000000'
  },
  txt1: {
    alignSelf: 'flex-start',
    color: 'black',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    top: 30,
    marginStart: 25
  },
  txt2: {
    alignSelf: 'flex-start',
    color: '#808080',
    marginLeft: 32
  },
  txt3: {
    alignSelf: 'center',
    color: '#808080',
    marginTop: '1%'
  },
  txt4: {
    alignSelf: 'center',
    color: '#007aff'
  },
  innerview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    height: 40,
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    marginHorizontal: 25
  },
  txtin: {
    marginHorizontal: 10,
    color: '#000'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    padding: 10,
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default Screen2;