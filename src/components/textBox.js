import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const TextBox = ({ secureText, required, onChangeText, value }) => {
    const [isFocused, setFocused] = useState(false);
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
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureText}
        />
    );
}

export default TextBox;

