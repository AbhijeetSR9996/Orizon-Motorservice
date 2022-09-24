import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

const Nexthings = () => {
    return (
        <>
            <Text style={styles.txt1}>Next Thing on Your Mind</Text>
            <ScrollView horizontal={true} style={styles.ScrollViewContainer} showsHorizontalScrollIndicator={false}>
                <View style={styles.ImageContain}>
                    <Image source={require('../images/hd.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt2}>Motorcycle</Text>
                    <Text style={styles.txt3}>Financing</Text>
                    <Image source={require('../images/dashboard.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt4}>COE</Text>
                    <Text style={styles.txt5}>Financing</Text>
                    <Image source={require('../images/bikefront.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt6}>RE</Text>
                    <Text style={styles.txt7}>Financing</Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Nexthings

const styles = StyleSheet.create(
    {
        ScrollViewContainer: {
            backgroundColor: 'white',
            margin: 10,
            bottom: 470
        },
        ImageContain: {
            flexDirection: 'row',
            padding: 10,

        },
        ImageConatiner: {
            height: 200,
            width: 140,
            margin: 5,
            borderRadius: 10
        },
        txt1: {
            color: 'black',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: 20,
            position: 'relative',
            margin: 10,
            paddingStart: 10,
            bottom: 460
        },
        txt2: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 10,
            top: 130
        },
        txt3: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 10,
            top: 155
        },
        txt4: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 163,
            top: 130
        },
        txt5: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 163,
            top: 155
        },
        txt6: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 315,
            top: 130
        },
        txt7: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 315,
            top: 155
        },
    }

) 