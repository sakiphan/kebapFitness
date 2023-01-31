import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './Input.style';

function Input({label, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labels}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput onChangeText={onChangeText} placeholder={placeholder} />
      </View>
    </View>
  );
}

export default Input;
