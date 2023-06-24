import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';


export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  } 

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={[styles.input, {borderColor:borderColor}]   }
        placeholder='Ingrese Libro' 
        autoCapitalize='none'
        autoCorrect={false}
        cursorColor='#B7BCE1'
        selectionColor='#B7BCE1'
        placeholderTextColor={"#8C94CF"}
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        />
        <Button title='Agregar' color={'#424D9E'}></Button>
      </View>
    </View>
    </SafeAreaView>
  );
}

