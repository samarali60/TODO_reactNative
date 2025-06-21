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
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>
        TODO APP
      </Text>
      <TodoForm onSubmit={handelAddTOdo} />

      <View style={{ ...styles.dividerLine, marginTop: 15 }} />
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 15 }}>
          {todos.length > 0 && (
            <TodoList todos={filteredTodos} onDelete={handelDeleteTodo} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
