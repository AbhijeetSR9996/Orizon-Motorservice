import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const OtpScreen = () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

    return (
        <>
            <SafeAreaView style={styles.root}>

                <CodeField
                    ref={ref} {...props} value={value} onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.CodeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View onLayout={getCellOnLayoutHandler(index)} key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )} />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 10,
        minHeight: 200,
        alignContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    CodeFieldRoot: {
        marginTop: 50,
        width: 300,
        marginLeft: 25,
        marginRight: 10,
        right: 20
    },
    cellRoot: {
        width: 40,
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 3,
    },
    cellText: {
        color: '#000',
        fontSize: 22,
        marginTop: 15,
        alignSelf: 'auto'
    },
    focusCell: {
        borderBottomColor: '#000',
        borderBottomWidth: 3,

    }
});

export default OtpScreen;