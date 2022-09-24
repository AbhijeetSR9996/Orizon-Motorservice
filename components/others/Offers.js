import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

const Nexthings = () => {
    return (
        <>
            <Text style={styles.txt}>Offers</Text>
            <ScrollView horizontal={true} style={styles.ScrollViewContainer} showsHorizontalScrollIndicator={false}>
                <View style={styles.ImageContain}>
                    <Image source={require('../images/lastimage.png')} style={styles.ImageConatiner}></Image>
                    <Image source={require('../images/lastimage.png')} style={styles.ImageConatiner}></Image>
                    </View>
            </ScrollView>
        </>
    );
};

export default Nexthings;

const styles = StyleSheet.create(
    {
        ScrollViewContainer: {
            backgroundColor: 'white',
            margin: 10,
            bottom:480
        },
        ImageContain: {
            flexDirection: 'row',
            padding: 10,

        },
        ImageConatiner: {
            height: 200,
            width: 280,
            margin:5,
            borderRadius: 10,
            paddingStart: 5
        },
        txt:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontWeight: 'bold', 
            fontSize: 20, 
            position: 'relative', 
            margin: 10, 
            paddingStart: 10,
            bottom:460 
        }
    }

) 