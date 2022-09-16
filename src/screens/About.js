import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Abhijeet Singh Rathour</Text>
        <Text style={styles.paraStyle}> I am a Software Developer 🙂 </Text>
        <View style={styles.aboutContainer}>
          {/* <Image style={styles.imgStyle} source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs-tinysrgb&dpr=2&h=650&w=940"}}/> */}
          <Image style={styles.imgStyle} source={require('../assets/pexels-photo-220453.jpeg')} />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About Me</Text>
          <Text style={styles.paraStyle2}>
            Lorem ipsum dolor sit amet, consectuttir airisfcing elicit. Aemen ommodo ligqui eget dolor.
            {/* Lorem ipsum dolor sit amet, consectuttir airisfcing elicit. Aemen ommodo ligqui eget dolor. */}
          </Text>
        </View>
        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: '10%', marginBottom: '5%' }}>
          <TouchableOpacity style={{ marginRight: '5%' }} onPress={() =>
            Linking.openURL("https://www.instagram.com")}>
            {/* <Image style={styles.iconStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" }} /> */}
            <Image style={styles.iconStyle} source={require('../assets/2111463.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: '5%' }} onPress={() =>
            Linking.openURL("https://www.youtube.com")}>
            {/* <Image style={styles.iconStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png" }} /> */}
            <Image style={styles.iconStyle} source={require('../assets/187210.png')} />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() =>
            Linking.openURL("https://www.discord.com")}>
            <Image style={styles.iconStyle} source={require('../assets/906361.png')} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() =>
            Linking.openURL("https://www.github.com")}>
            <Image style={styles.iconStyle} source={require('../assets/github.png')} />
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  aboutContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 30,
    fontFamily: 'Nunito_700Bold'
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: 'center',
    fontFamily: 'Nunito_600SemiBold'
  },
  paraStyle2: {
    color: '#fff',
    paddingBottom: 20
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  }

});

export default About;

