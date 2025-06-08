import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen ({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Você está em:</Text>
            <Text style={styles.title}>🎀 HomeScreen 🎀</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Vá para os Detalhes"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        <View style={styles.buttonContainer}>
            <Button
                title="Vá para o Perfil"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    </View>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc2e0'
    },
    title: {
        alignContent: 'center',
        fontSize: 24,
        marginBottom: 25,
        color: '#c282a3'
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#c282a3'
    },
    buttonContainer: {
        backgroundColor: '#f53196',
        margin: 10,
        borderRadius: 20,
        width: windowWidth *0.5
    },
});