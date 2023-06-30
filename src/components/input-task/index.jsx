import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandrleChangeText,
  task,
  onHandleCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Ingrese Libro"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#B7BCE1"
        selectionColor="#B7BCE1"
        placeholderTextColor="#8C94CF"
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandrleChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Agregar"
        color="#424D9E"
        onPress={onHandleCreateTask}
      />
    </View>
  );
};

export default InputTask;
