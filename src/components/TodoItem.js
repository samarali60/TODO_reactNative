import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ item, onDelete }) => {
  return (
    <View style={styles.todosContainer}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={{ color: "gray" }}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Feather name="edit" size={20} color="blue" />
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
        {/* <AntDesign name="checkcircleo" size={20} color="green" /> */}
      </View>
    </View>
  );
};

export default TodoItem;
