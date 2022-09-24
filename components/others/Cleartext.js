import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Cleartext = () => {
  const [text, setText] = useState("");
  return (
    <>
      <View >
        <TextInput
          placeholder="enter name"
          placeholderTextColor={'#808080'}
          style={styles.textInput}
          value={text}
          maxLength={40}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
          style={styles.closeButtonParent}
          onPress={() => setText("")}
        >
          <Image
            style={styles.closeButton}
            source={require("../images/crossing.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    //width: "90%",
    marginHorizontal: 10,
    color: '#000'
  },
  closeButton: {
    height: 30,
    width: 30,
    position: 'absolute'
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginLeft: 300,
    bottom: 20
  },
});

export default Cleartext;