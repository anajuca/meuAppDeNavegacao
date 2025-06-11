import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {

    const LogOut = async () => {
        try {
            await AsyncStorage.removeItem('usuarioLogado');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Não foi possível fazer logout:', error);
            alert('Não foi possível fazer logout, tente novamente!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Você está em:</Text>
            <Text style={styles.title}>🎀 HomeScreen 🎀</Text>
            
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Details')}
            >
                <Text style={styles.buttonText}>Vá para Detalhes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>Vá para Perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={LogOut}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc2e0',
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
        width: windowWidth * 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutButton: {
        backgroundColor: '#f53131',
        margin: 10,
        borderRadius: 20,
        width: windowWidth * 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#dbd3d4',
        fontSize: 16
    },
});