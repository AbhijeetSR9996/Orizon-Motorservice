import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../global/constants';
import SocialButton from './SocialButton';
import FontAwesome from 'react-native-vector-icons';


const LoginScreen = ({ navigation }) => {
    return (
        <View>
            {/* <SocialButton
                buttonTitle='Sign In with Facebook'
                btnType='facebook'
                color='#4867aa'
                onPress={() => { }} />
            <SocialButton
                buttonTitle='Sign In with Google'
                btnType='google'
                color='#de4d41'
                onPress={() => { }} /> */}
            <Button
                title='Sign In with Google'
                //buttonTitle='Sign In with Facebook'
                btnType='Google'
                color='#de4d41'
                onPress={() => { }} />
            <Button
                title='Sign In with Facebook'
                //buttonTitle='Sign In with Facebook'
                btnType='facebook'
                color='#4867aa'
                onPress={() => { }} />
        </View>
    );
};

export default LoginScreen;
