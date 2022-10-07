
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RadioButton = ({ onPress, selected, children }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Radio = () => {
  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Continental GT 650 CC - B..", selected: false },
  ]);
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };
  return (
    <View style={styles.app}>
      {isLiked.map((item) => (
        <RadioButton onPress={() => onRadioBtnClick(item)}
          selected={item.selected}
          key={item.id}>
          {item.name}
        </RadioButton>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 10,
    marginVertical: 10,
    textAlign: 'center'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  radioButton: {
    height: 22,
    width: 22,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 17,
    top: 305
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'orange',

  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingStart: 60,
    top: 295
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
    marginVertical: 5
  }
});

export default Radio;

