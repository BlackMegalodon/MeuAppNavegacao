import { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;


export default function RegistroScreen({ navigation }) {
    const [nomeregistro, onChangeText] = useState('');
    const [senharegistro, onChangeNumber] = useState('');
    const Registro = async () => {
        if (nomeregistro && senharegistro) {
            try {
                // Salva os dados localmente
                await AsyncStorage.setItem('usuario', JSON.stringify({
                    nome: nomeregistro,
                    senha: senharegistro
                }));

                Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
                navigation.navigate('Login'); // ou outra tela após registrar
            } catch (e) {
                Alert.alert('Erro', 'Não foi possível registrar o usuário');
            }
        } else {
            Alert.alert('Atenção', 'Preencha todos os campos');
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Registrar</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder="Digite seu Nome"
                    onChangeText={onChangeText}
                    value={nomeregistro}
                />
                <TextInput
                    secureTextEntry
                    value={senharegistro}
                    onChangeText={onChangeNumber}
                    placeholder="uma Senha"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Registrar"
                    onPress={Registro} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 90,
        width: windowWidth * 0.5,
        borderRadius: 5
    },
    input: {
        margin: 90,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});