import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, } from 'react-native';
import Anim4 from "./Anim4";

export default class ScreenSplash extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }

    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }


    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    {/* <Text style={{ fontSize: 30, marginBottom: '10%', fontWeight: 'bold', color: '#fff', }}>LOGINAPP</Text> */}
                    <Image source={require('../components/images/orizonbig.png')}
                        style={{
                            alignSelf: 'center',
                            //marginEnd: 60,
                        }}
                    />
                </View>
            </View>
        )
        return (
            <View style={styles.MainContainer}>
                <Anim4 />
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'android') ? 20 : 0
    },
    SplashScreen_RootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    SplashScreen_ChildView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1,
        marginVertical: '-10%',
    },
});
