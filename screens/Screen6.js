import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
GoogleSignin.configure({
    webClientId: '1044876849257-fo52pivf6uir662tg43ve63dcp7slt6a.apps.googleusercontent.com',
    offlineAccess: true
})

class Screen6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userGoogleInfo: {},
            loaded: false
        };
    }
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn();
            this.setState({
                userGoogleInfo: userInfo,
                loaded: true
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
            <View>
                <GoogleSigninButton
                    onPress={this.signIn}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    style={{ width: 40, height: 35, left: '61%', bottom: 87 }} />
                {this.state.loaded ?
                    <View>
                        <Text>{this.state.userGoogleInfo.user.name}</Text>
                        <Text>{this.state.userGoogleInfo.user.email}</Text>
                        <Image //style={{ width: '50', height: '50' }}
                            source={{ uri: this.state.userGoogleInfo.user.photo }} />
                    </View> : <Text style={{ color: 'transparent' }}>Not SignedIn</Text>}
            </View>
        );
    };

}


export default Screen6;

