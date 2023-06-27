import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';


export default function App() {


  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState([])

  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  } 

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }

  const onHandrleChangeText = (text) =>{
    setTask(text)
  }

  const onHandleCreateTask = () =>{
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])
    setTask('')
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
        onChangeText={onHandrleChangeText}
        value={task}
        />
        <Button disabled={task.length == 0} title='Agregar' color={'#424D9E'} onPress={onHandleCreateTask}></Button>
      </View>
      <View style={styles.listContainer}>
      {
        tasks.map((item) => (
          <View style={styles.containerItem} key={item.id}>
            <Text style={styles.listItem}>{item.value} </Text>
          </View>
        ))

      }
      </View>
    </View>
    </SafeAreaView>
  );
}

