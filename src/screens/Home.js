import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Menu from '../component/Menu';

const Home = (props) => {
  const description = "Lorem ipsum dolor sit amet, consectuttir airisfcing elicit. Aemen ommodo ligqui eget dolor.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="contain"
          source={require("../assets/books.jpg")} />
        <Text style={styles.mainHeader}>Welcome to</Text>
        {/* <Text style={[styles.mainHeader, { fontSize: 33, color: '#4c5dab', marginTop: 0, }]}>{props.channelName}</Text> */}
        <Text style={[styles.mainHeader, { fontSize: 33, color: '#4c5dab', marginTop: 0, }]}>EDUCATION APP</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 },]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '110%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: '10%'
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 20,
  },
  homeTop: {
    //height:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase'
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
});

export default Home;