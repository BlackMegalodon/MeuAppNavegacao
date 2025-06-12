import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go to Home"
                    onPress={() => navigation.navigate('Home')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Go to Details"
                    onPress={() => navigation.navigate('Details')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Log Out"
                onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#dda0dd',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5
    },
});