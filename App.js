import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingrese Libro' style={styles.input}/>
        <Button title='Agregar' color={'#424D9E'}></Button>
      </View>
    </View>
    </SafeAreaView>
  );
}

