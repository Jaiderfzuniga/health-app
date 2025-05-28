import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { supabase } from "../supabaseClient";

export default function RegisterScreen({ onClose }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // corregido
    const [fullname, setFullName] = useState("");
    const [mobilephone, setMobilePhone] = useState(""); // corregido
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        setLoading(true);
        setErrorMessage("");

        // Comprobar si el usuario ya existe
        const { data: existingUser, error: userFetchError } = await supabase
            .from("users")
            .select("*")
            .eq("email", email);

        if (userFetchError) {
            setErrorMessage("Error checking user existence");
            setLoading(false);
            return;
        }

        if (existingUser && existingUser.length > 0) {
            setErrorMessage("User already exists with this email.");
            setLoading(false);
            return;
        }

        // Crear usuario en Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setErrorMessage(error.message);
            setLoading(false);
            return;
        }

        // Insertar datos adicionales en la tabla "users"
        const { error: insertError } = await supabase.from("users").insert([
            {
                email,
                password, // ⚠️ Para seguridad, evita guardar contraseñas planas.
                fullname,
                mobile_phone: mobilephone
            }
        ]);

        setLoading(false);

        if (insertError) {
            setErrorMessage(insertError.message);
        } else {
            Alert.alert("Success", "User has been created successfully");
            onClose();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>

            <TextInput
                style={styles.input}
                placeholder="admin@mail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="*********"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Your fullname"
                value={fullname}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="(+57) 000000000"
                keyboardType="phone-pad"
                value={mobilephone}
                onChangeText={setMobilePhone}
            />

            {errorMessage ? (
                <Text style={{ color: "red", marginTop: 10 }}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? "Registering..." : "Register"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
                <Text style={styles.link}>Back to login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "80%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    button: {
        marginTop: 20,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    link: {
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline"
    },
});
