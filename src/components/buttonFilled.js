import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function FilledButton({ text, onPress, style }) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#2AFDC2',
        width: 300,
        margin: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#080B19',
    },
});

