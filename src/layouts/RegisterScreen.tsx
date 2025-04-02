import React, { useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Touchable} from "react-native"

export default function RegisterScreen({onClose}:any){
    return (
          <View>
            <Text>Sing up</Text>
            <TouchableOpacity onPress={onClose}>
                <Text>Back to login</Text>
            </TouchableOpacity>
          </View>
    );
}