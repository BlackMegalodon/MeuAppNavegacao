import { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput, Alert } from "react-native";
import RegistroScreen from "./RegistroScreen";

const windowWidth = Dimensions.get('window').width;


export default function Login({ navigation }) {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeregistro, setNomeregistro] = useState('');
    const [senharegistro, setSenharegistro] = useState('');
    
    const validar = () => {
        if (senha == senharegistro) {
            if (nome == nomeregistro) {
                navigation.navigate('Profile');
            };
        };
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input}
                    placeholder="Digite seu Nome"
                    onChangeText={setNome}
                    value={nome}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite sua Senha"
                    keyboardType="numeric"
                />
            <View style={styles.buttonContainer}>
                <Button title="Logar"
                    onPress={validar} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Registre-se"
                    onPress={() => navigation.navigate('Registro')} />
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
        borderWidth: 2,
        borderRadius: 5
    },
});