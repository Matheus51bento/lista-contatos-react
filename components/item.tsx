import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import SvgXml from 'react-native-svg';

type User = {
    nome: string,
    status: number
}

export function Item(props: User){

    const { status } = props;
    const lineColor = status >= 0 ? '#078c4a' : '#f35';

    return (
        <View style={styles.container}>
            <Image style={styles.images} source={require('../assets/eu.png')} />
            <Text style={{ width: 80 }}>{props.nome}</Text>
            <View style={[styles.status_container, { backgroundColor: lineColor }]}>
                <Text style={styles.status}>{props.status}</Text>
            </View>
            <View style={[styles.status_container, { backgroundColor: "#eee", padding:5}]}>
                <Image style={styles.icon} source={require('../assets/person_add.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 5
    },
    status_container: {
        borderRadius: 5,
    },
    status: {
        width: 60,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 16,
        paddingVertical: 7,
        height: 32,
        paddingHorizontal: 5,
        color: "#fff",
    },
    icon: {
        width: 25,
        height: 25
    },
    images: {
      width: 35,
      height: 35,
      borderRadius: 50
    },
});
