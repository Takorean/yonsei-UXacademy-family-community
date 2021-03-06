import React from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';

function BorderedInput({placeholder, value, onChangeText, ...rest}) {
    return <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                {...rest}         
                style={styles.input}
                />
}

const styles = StyleSheet.create({
    input:{
        //borderColor:'black',
        borderBottomWidth:1,
        height:40,
        width:350,
        //paddingHorizontal:16,
        //height:48,
        //borderRadius:20,
        //backgroundColor:'white',
        //marginBottom:16
    }
});

export default BorderedInput;
