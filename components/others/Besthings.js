import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Besthings = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text style={styles.txt1}
            >Our Best Services</Text>
            <Text style={styles.txt2} onPress={() => navigation.navigate('Screen5')}>See All</Text>
            <ScrollView horizontal={true} style={styles.ScrollViewContainer} showsHorizontalScrollIndicator={false}>
                <View style={styles.ImageContain}>
                    <Image source={require('../images/machine.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt3}>Air Filter</Text>
                    <Text style={styles.txt4}>Replacement</Text>
                    <Text style={styles.txt5}>start at</Text>
                    <Text style={styles.txt6}> $19</Text>
                    <Image source={require('../images/bike.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt7}>Complete Wash</Text>
                    <Text style={styles.txt8}>Inside-out wash</Text>
                    <Text style={styles.txt9}>start at</Text>
                    <Text style={styles.txt10}> $49</Text>
                    <Image source={require('../images/machine.png')} style={styles.ImageConatiner}></Image>
                    <Text style={styles.txt11}>Complete Wash</Text>
                    <Text style={styles.txt12}>Inside-out wash</Text>
                    <Text style={styles.txt13}>start at</Text>
                    <Text style={styles.txt14}> $39</Text>
                </View>
            </ScrollView>
        </>
    );
};

export default Besthings

const styles = StyleSheet.create(
    {
        ScrollViewContainer: {
            backgroundColor: 'white',
            margin: 10,
            bottom: 480,

        },
        ImageContain: {
            flexDirection: 'row',
            padding: 5,
            paddingVertical: 5,
            paddingBottom: 90
        },
        ImageConatiner: {
            margin: 5,
            width: 175,
            height: 150,
            borderRadius: 10,
            marginStart: 15,
            marginLeft: 5
        },
        txt1: {
            color: 'black',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: 20,
            position: 'relative',
            margin: 10,
            paddingStart: 10,
            bottom: 420
        },
        txt2: {
            color: '#f2994a',
            textTransform: 'capitalize',
            fontWeight: 'normal',
            fontSize: 15,
            position: 'relative',
            margin: 10,
            paddingStart: 280,
            bottom: 463,
            //marginLeft: '6%',
            alignSelf: 'flex-end'
        },
        txt3: {
            color: 'black',
            textTransform: 'capitalize',
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 8,
            top: 160
        },
        txt4: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 8,
            top: 190
        },
        txt5: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 8,
            top: 210
        },
        txt6: {
            color: '#4DB369',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 60,
            top: 210
        },
        txt7: {
            color: 'black',
            textTransform: 'capitalize',
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 190,
            top: 160
        },
        txt8: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 190,
            top: 190
        },
        txt9: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 190,
            top: 210
        },
        txt10: {
            color: '#4DB369',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 243,
            top: 210
        },
        txt11: {
            color: 'black',
            textTransform: 'capitalize',
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 375,
            top: 160
        },
        txt12: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 375,
            top: 190
        },
        txt13: {
            color: 'black',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 375,
            top: 210
        },
        txt14: {
            color: '#4DB369',
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            margin: 10,
            paddingStart: 428,
            top: 210
        },

    }

) 