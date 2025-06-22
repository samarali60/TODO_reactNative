import { ScrollView, Text, View } from "react-native";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Filter from "../components/Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    };
    loadTodos();
  }, []);
  const saveTodo = async (todo) => {
    await AsyncStorage.setItem("todos", JSON.stringify(todo));
  };

  const handelAddTOdo = async (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    await saveTodo(newTodos);
    console.log("Todo Added:", todo);
  };
  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "InProgress") return !todo.completed;
    if (activeFilter === "Done") return todo.completed;
  });

  const handelDeleteTodo = async (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    await saveTodo(newTodos);
    console.log("Todo Deleted:", id);
  };
  const handelCompleteTask = async (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    await saveTodo(newTodos);
    if (newTodos.find((todo) => todo.id === id).completed)
      alert("Todo Completed");
    console.log("Todo Completed:", id);
  };
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>
        Add Todo
      </Text>
      <TodoForm onSubmit={handelAddTOdo} />

      <View style={{ ...styles.dividerLine, marginTop: 15 }} />
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <View style={{ flex: 1, width: "100%", marginTop: 15 }}>
        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            onDelete={handelDeleteTodo}
            onComplete={handelCompleteTask}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "gray", fontSize: 18 }}>No Todos Found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
