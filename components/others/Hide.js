import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text, requireNativeComponent } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Hide = () => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <>
      <View>
        <TextInput
          placeholder="enter mobile number"
          placeholderTextColor={'#808080'}
          style={styles.textInput}
          secureTextEntry={hidePass ? true : false}
          keyboardType='numeric'
          maxLength={10} />
        {/* <Icon name={hidePass ? 'eye-slash' : 'eye'} size={17} color='grey' */}
        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
          <Image source={hidePass ? require('../images/eyes.png') : require('../images/eyes.png')}
            onPress={() => setHidePass(!hidePass)}
            style={styles.closeButton} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "90%",
    marginHorizontal: 10,
    color: '#000'
  },
  closeButton: {
    position: 'absolute',
    left: 290,
    bottom: 10,
    height: 20,
    width: 25
  },
});

export default Hide;