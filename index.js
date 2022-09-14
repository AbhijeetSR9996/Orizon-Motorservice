import React from 'react';
import { AppRegistry } from 'react-native';
import Appp from './Appp';
import { name as appName } from './app.json';
const index = () => {
    return (
        <Appp />
    );
};

AppRegistry.registerComponent(appName, () => index);

