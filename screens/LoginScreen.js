import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, TouchableOpacity, StyleSheet, Alert, Pressable } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'a@gmail.com' && password === '1') {
            navigation.push('AppTabs');
        } else {
            Alert.alert('Invalid Credentials', 'Please check your email and password.');
        }
    };

    const handleForgotPassword = () => {
        // Add logic to handle forgot password
        // For example, you can navigate to a Forgot Password screen
        // navigation.push('ForgotPassword');
        Alert.alert('Forgot Password', 'Implement your forgot password logic here.');
    };

    const handleLoginWithFacebook = () => {
        // Add logic for login with Facebook
        Alert.alert('Login with Facebook', 'Implement your Facebook login logic here.');
    };

    const handleSignInWithApple = () => {
        // Add logic for sign in with Apple
        Alert.alert('Sign in with Apple', 'Implement your Apple login logic here.');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign In</Text>
            </View>
            <TextInput
                style={styles.valueInput}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.valueInput}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.buttonLogin}>
                <Pressable onPress={handleLogin}>
                    <Text style={styles.textLogin}>Log In</Text>
                </Pressable>
            </View>
            <View>
                <Text>OR</Text>
            </View>
            <View style={styles.buttonFacebook}>
                <Pressable onPress={handleLoginWithFacebook}>
                    <Text style={styles.textFacebook}>Login with Facebook</Text>
                </Pressable>
            </View>
            <View>
                <Image
                    source={require('../assests/icon/googleicon.png')} // replace with the actual path to your logo image
                    style={{ width: 30, height: 30 }} // adjust the width and height according to your needs
                />
            </View>
            <View style={styles.buttonApple}>
                <Pressable onPress={handleSignInWithApple}>
                    <Text style={styles.textApple}>Sign in with Apple</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
    },
    header: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 35,
        color: '#645188',
        fontWeight: 'bold',
    },
    valueInput: {
        width: '80%',
        fontSize: 15,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    forgotPassword: {
        color: '#0073e5',
        // textDecorationLine: 'underline',
        marginTop: 5,
        padding: 5,
        margin: 10,
        marginLeft: 150,
    },
    textLogin: {
        color: "white",
        fontSize: 18,
        marginLeft: 100,
        padding: 3,
    },
    buttonLogin: {
        backgroundColor: '#645188',
        width: '75%',
        height: 35,
        borderRadius: 30,
        overflow: 'hidden',
        marginVertical: 10,
    },
    buttonFacebook: {
        backgroundColor: '#0892d0',
        width: '75%',
        height: 35,
        borderRadius: 30,
        overflow: 'hidden',
        marginVertical: 10,
    },
    textFacebook: {
        color: "white",
        fontSize: 17,
        marginLeft: 60,
        padding: 5,
    },
    buttonApple: {
        backgroundColor: '#000000',
        width: '75%',
        height: 35,
        borderRadius: 30,
        overflow: 'hidden',
        marginVertical: 10,
    },
    textApple: {
        color: "white",
        fontSize: 17,
        marginLeft: 60,
        padding: 5,
    },
});

export default LoginScreen;
