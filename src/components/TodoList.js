import { FlatList } from "react-native-web";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item} onDelete={onDelete}/>}
        />
    
    </>
  );
};

export default TodoList;
