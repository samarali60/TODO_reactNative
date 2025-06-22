import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item} onDelete={onDelete} onComplete={onComplete} />}
        />
    
    </>
  );
};

export default TodoList;
