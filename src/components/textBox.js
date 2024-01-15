import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const TextBox = () => {
    const [isFocused, setFocused] = useState(false);
    const [text, onChangeText] = useState('');

    const styles = StyleSheet.create({
        input: {
            height: 40,
            width: 385,
            margin: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: isFocused ? '#23FF39' : '#F7FFFF',
            borderRadius: 7,
            color: '#F7FFFF',
        }
    });

    return (
        <TextInput
            style={styles.input}
            caretHidden={true}
            onFocus={() => setFocused(true)}
            on
            onChangeText={onChangeText}
            value={text}
        />
    );
}

export default TextBox;

