import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const statusLogin = async () => {
            try {
                const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
                if (usuarioLogado) {
                    navigation.navigate('Home');
                }
            } catch (error) {
                console.error('Erro ao verificar o status de login:', error);
            }
        };

        statusLogin();
    }, []);

    const Login = async () => {
        if (!usuario || !senha) {
            alert('Todos os campos devem ser preenchidos para poder continuar!');
            return;
        }

        if (usuario !== 'anamuitolegal@gmail.com') {
            alert('Este usuário não existe! Tente novamente!');
            return;
        }

        if (senha !== 'anamuitolegal123') {
            alert('Sua senha está incorreta! Tente novamente!');
            return;
        }

        if (senha !== 'anamuitolegal123' && usuario !== 'anamuitolegal@gmail.com') {
            alert("Usuário e senha incorretos! Tente Novamente!");
            return;
        }

        try {
            await AsyncStorage.setItem('usuarioLogado', 'logado');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao salvar o status de login:', error);
            alert('Erro ao salvar o status de login. Tente novamente.');
        }
    };

    return (
<View style={styles.container}>
            <Text style={styles.title}>🎀 Bem vindo! 🎀</Text>
            <Text style={styles.subtitle}>Faça Login para continuar</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário (email)"
                    keyboardType="email-address"
                    value={usuario}
                    onChangeText={setUsuario}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="default"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={Login}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc2e0',
        borderColor: '#000000',
        borderRadius: 2
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        marginBottom: 5,
        color: '#c282a3'
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginBottom: 25,
        color: '#c282a3'
    },
    buttonContainer: {
        backgroundColor: '#f53196',
        color: '#f53196',
        margin: 20,
        width: windowWidth * 0.5,
        borderRadius: 20,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#dbd3d4',
        margin: 3,
        borderRadius: 10,
        height: 42,
        borderColor: '#bab1b2',
        borderWidth: 1,
    },
    buttonText: {
        color: '#dbd3d4',
        fontSize: 16,
    },
});