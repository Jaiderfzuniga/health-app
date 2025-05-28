import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import LoginScreen from "./LoginScreen";

export default function SplashScreen() {
    const [showLogin, setShowLogin] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0]; // Animación de opacidad

    useEffect(() => {
        // Iniciar animación de desvanecimiento
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Mostrar pantalla de login después de 3 segundos
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 3000);

        return () => clearTimeout(timer); // Limpieza
    }, []);

    if (showLogin) {
        return <LoginScreen />;
    }

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require("../assets/logo.png")}
                style={[styles.logo, { opacity: fadeAnim }]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Fondo blanco o el que prefieras
    },
    logo: {
        width: 200,
        height: 200,
    },
});
