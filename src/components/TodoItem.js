import { View, Text ,TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATH } from '../routes/BottomTabsNavigator';
const TodoItem = ({ item, onDelete, onComplete }) => {
const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress= { () => navigate(PATH.DETAILS  , {todo : item}) }
>
      <View style={styles.todosContainer}>
        <View>
          <Text
            style={[
              styles.text,
              item.completed && { textDecorationLine: "line-through" },
            ]}
          >
            {item.title}
          </Text>
          <Text style={{ color: "gray" }}>{item.description}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Feather name="edit" size={20} color="blue" />

          <Feather
            name="trash"
            size={20}
            color="red"
            onPress={() => onDelete(item.id)}
          />

          {item.completed ? (
            <AntDesign
              name="checkcircle"
              size={20}
              color="green"
              onPress={() => onComplete(item.id)}
            />
          ) : (
            <AntDesign
              name="checkcircleo"
              size={20}
              color="green"
              onPress={() => onComplete(item.id)}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
