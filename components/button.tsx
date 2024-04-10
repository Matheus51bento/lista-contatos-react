import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type ButtonProps = {
    title: string;
    color: string;
    textColor: string;
}

export function ButtonComponent(props: ButtonProps) {
    return (
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Button title={props.title} color={props.textColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 2,
        width: 150
    },
});
