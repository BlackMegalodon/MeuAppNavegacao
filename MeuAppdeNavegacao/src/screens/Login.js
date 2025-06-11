import { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;


export default function Login({ navigation }) {
    const [nome, onChangeText] = useState('');
    const [senha, onChangeNumber] = useState('');
    const validar = () => {
        if (senha == senharegistro) {
            if (nome == nomeregistro) {
                navigation.navigate('Profile');
            }
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder="Digite seu Nome"
                    onChangeText={onChangeText}
                    value={nome}
                />
                <TextInput
                    secureTextEntry
                    value={senha}
                    onChangeText={onChangeNumber}
                    placeholder="Digite sua Senha"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="logar"
                    onPress={() => navigation.goBack()}/>
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