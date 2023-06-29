import { Modal, StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';


export default function App() {


  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState([])

  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const [isVisible, setIsVisible] = useState(false)

  const [selectedTask, setSelectedTask] = useState(null)

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

  const onHandlerModal = (item) => {
    setIsVisible(true)
    setSelectedTask(item)
  }

  const onHandleDelete = (id) => {
    setTasks((prevTasks)=> prevTasks.filter((task) => task.id !== id))
    setIsVisible(false)
  }

const renderItem = ({item}) => (
  <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem}>
    <Text style={styles.listItem}>{item.value} </Text>
    <Text style={styles.icon}>X</Text>
  </TouchableOpacity>
)


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
      <View>
      <FlatList
      data={tasks}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical={true}
      keyExtractor={item => item.id}
      />
      </View>
    </View>
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
            title= 'Cancel'
            color= '#424D9E'
            onPress={() => setIsVisible(false)}
            />
            <Button
            title= 'Delete'
            color= 'red'
            onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
}

