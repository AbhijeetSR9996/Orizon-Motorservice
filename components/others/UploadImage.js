import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function UploadImage() {
    const [image, setImage] = useState(null);
    const addImage = () => { };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'Yall needs access to your camera ',

                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            } else {

            }
        } catch (err) {

        }
    };
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 700,
            height: 700,
            compressImageQuality: 0.7,
            compressImageMaxWidth: 700,
            compressImageMaxHeight: 700,
            includeBase64: true,
        }).catch(error => { });
    };
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 700,
            height: 700,

            includeBase64: true,
            compressImageQuality: 0.5,
        });
    };
    const createTwoButtonAlert = () =>
        Alert.alert(
            '',
            'ADD PICTURE',

            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Camera',
                    onPress: () => takePhotoFromCamera(),
                },
                {
                    text: 'Choose from Gallery',
                    onPress: () => choosePhotoFromLibrary(),
                },
            ],
            { cancelable: false },
        );
    return (
        <View style={imageUploaderStyles.container}>
            {
                image && <Image />
            }
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={() => createTwoButtonAlert()} style={imageUploaderStyles.uploadBtn} >
                    <Image style={imageUploaderStyles.img} source={require('../images/uploadicon.png')} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

const imageUploaderStyles = StyleSheet.create({
    container: {
        height: 89,
        width: 100,
        backgroundColor: '#efefef',
        position: 'relative',
        overflow: 'hidden',
        top: -460,
        left: 246
    },
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: '100%',
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    img: {
        width: 60,
        height: 65,
        top: 10
    },
});