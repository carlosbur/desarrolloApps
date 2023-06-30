import { useState } from "react";
import { View, SafeAreaView } from "react-native";

import { InputTask, TaskItem, Lista } from "./components";
import PopUp from "./components/modal/modal";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [borderColor, setBorderColor] = useState("#C5C9E7");

  const [isVisible, setIsVisible] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const onHandrleChangeText = (text) => {
    setTask(text);
  };

  const onHandleCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);
    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandrleChangeText={onHandrleChangeText}
          onHandleCreateTask={onHandleCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />
        <View />
        <Lista renderItem={renderItem} tasks={tasks} />
      </View>
      <PopUp
        isVisible={isVisible}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
        setIsVisible={setIsVisible}
      />
    </SafeAreaView>
  );
}
