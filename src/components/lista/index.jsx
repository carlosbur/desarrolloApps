import { FlatList } from "react-native";

import { styles } from "./styles";

const Lista = ({ tasks, renderItem }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical
      keyExtractor={(item) => item.id}
    />
  );
};

export default Lista;
