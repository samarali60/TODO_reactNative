import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../styles";
import TodoItem from "../components/TodoItem";

const Completed = () => {
  const completedTodos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo && todo.completed)
  );
  console.log("Completed Todos:", completedTodos);
  return (
    <View style={styles.container}>
      {completedTodos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No completed tasks</Text>
        </View>
      ) : (
        <FlatList
          data={completedTodos}
          contentContainerStyle={styles.todosContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      )}
    </View>
  );
};

export default Completed;
