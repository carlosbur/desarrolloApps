import { Modal, View, Text, Button } from "react-native";

import { styles } from "./sytles";

const PopUp = ({ isVisible, setIsVisible, onHandleDelete, selectedTask }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Are you sure to delete item?</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
          <Button title="Delete" color="red" onPress={() => onHandleDelete(selectedTask?.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;
