import React, { useState } from 'react';
import {
  View, TouchableOpacity, Text, TextInput,
  StyleSheet, SafeAreaView, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Confirmation = () => {
  const navigation = useNavigation();
  const Separator = () => (
    <View style={styles.separator} />
  );
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <View style={styles.modalboundary}>
        <View style={styles.modal}>
          <Text style={styles.txtmodal1}>Confirmation </Text>
          <Text style={styles.txtmodal2}>General Servicing</Text>
          <Text style={styles.txtmodal3}>of Harley Davidson SQ</Text>
          <Text style={styles.txtmodal6}>12345</Text>
          <Text style={styles.txtmodal4}>11:30 AM, 19th Sep 2021.</Text>
          <Text style={styles.txtmodal5}>at </Text>
          <TouchableOpacity style={styles.appButtonContainer1} onPress={() => navigation.navigate('Screen10')} >
            <Text style={styles.appButtonText1}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer2} onPress={() => { setShowModal(!showModal); }}>
            <Text style={styles.appButtonText2}>Cancel</Text>
          </TouchableOpacity>
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalboundary: {
    marginTop: 100,
    marginBottom: 400,
    borderWidth: 3,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
    borderRadius: 45,
    paddingBottom: 160
  },
  modal: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '00ff00',
    padding: 90,
    marginTop: 50,
    margin: 0,
    paddingBottom: -200,
  },
  txtmodal1: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    bottom: 120,
    fontWeight: '800'
  },
  txtmodal2: {
    bottom: 100,
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '500'
  },
  txtmodal3: {
    bottom: 100,
    alignSelf: 'center',
    color: 'grey',
    fontSize: 15,
    left: -20
  },
  txtmodal4: {
    bottom: 120,
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    left: 10,
    fontWeight: '500'
  },
  txtmodal5: {
    bottom: 141,
    alignSelf: 'center',
    color: 'grey',
    fontSize: 15,
    right: 85
  },
  txtmodal6: {
    bottom: 121,
    alignSelf: 'center',
    color: 'grey',
    fontSize: 15,
    left: 77
  },
  appButtonText1: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize',
    bottom: 15
  },
  appButtonText2: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: 'capitalize',
    bottom: 9
  },
  appButtonContainer1: {
    backgroundColor: "#f2994a",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 12,
    margin: 20,
    width: 300,
    left: 0,
    bottom: 170,
    marginTop: 60,
    marginBottom: 60,
    paddingBottom: 5
  },
  appButtonContainer2: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 12,
    margin: 20,
    width: 300,
    left: 0,
    bottom: 280,
    marginTop: 60,
    marginBottom: 60,
    paddingBottom: 5
  },
});

export default Confirmation;
