import { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import App from "../../App";

const windowWidth = Dimensions.get('window').width;


export default function RegistroScreen({ navigation }) {
    const [nomeregistro, setNomeregistro] = useState('');
    const [senharegistro, setSenharegistro] = useState('');
    const salvarUser = async (userArray) => {
        try {
            await AsyncStorage.setItem('usuarios', JSON.stringify(userArray));
        } catch (error) {
            console.log('Deu pau ai:', error);
        }
    };
    const addUser = () => {
        if (nomeregistro.trim() !== '') {
            const newUsers = [nomeregistro, senharegistro];
            setNomeregistro(newUsers);
            salvarUser(newUsers);
            setSenharegistro('');
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <TextInput style={styles.input}
                    placeholder="Digite seu Nome"
                    onChangeText={(text) => setNomeregistro(text)}
                    value={nomeregistro}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    value={senharegistro}
                    onChangeText={(senha) => setSenharegistro(senha)}
                    placeholder="Digite uma Senha"
                    keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                    <Button title="Registrar"
                        onPress={addUser} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Voltar ao Login"
                        onPress={() => navigation.navigate('Login')} />
                </View>
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
        borderWidth: 2
    },
});