import { FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { FILTRATION_TYPES } from "../redux/slices/TodoSlice";

const TodoList = () => {
  const {todos, filter} = useSelector((state) => state.todos);
  return (
    <>
        <FlatList
          data={todos.filter((todo) => {
            if (filter === FILTRATION_TYPES.ALL) return true;
            if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
            if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
          })}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item}  />}
        />
    
    </>
  );
};

export default TodoList;
