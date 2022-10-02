import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, BackHandler } from 'react-native';

const Screen4 = ({ navigation }) => {

    const Separator = () => (
        <View style={styles.separator} />
    );

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <View style={styles.bg} >
                <Image style={styles.direct} source={require('../components/images/logoout.png')} />
                {/* <Separator /> */}
            </View>
            <Text style={styles.txt1}>Welcome to Homepage..!!</Text>
            <Separator />
            <Separator />
            <Separator />

            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen2')} >
                <Text style={styles.appButtonText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                <Text style={styles.appButtonText}>Exit App</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    fixToText: {
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    direct: {

        bottom: '3%',
        marginTop: '1%',
        alignSelf: 'center',
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
        alignSelf: 'center',
        color: '#fff',

        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 30,
        top: 30,
        marginStart: 25,
        width: '100%'
    },
    txt2: {
        alignSelf: 'flex-start',
        color: '#808080',
        marginLeft: 32
    },
    txt3: {
        alignSelf: 'center',
        color: '#808080'
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
        marginHorizontal: 10
    },
});

export default Screen4;