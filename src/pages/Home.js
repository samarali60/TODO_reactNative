import { ScrollView, Text, View } from "react-native";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Filter from "../components/Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {  setTodos } from "../redux/slices/TodoSlice";
const Home = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
   useEffect(() => {
  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        const todosArr = JSON.parse(storedTodos);
        dispatch(setTodos(todosArr));
      }
    } catch (error) {
      console.error("Failed to load todos:", error);
    }
  };
  loadTodos();
}, []);

  useEffect(() => {
  AsyncStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>
        Add Todo
      </Text>
      <TodoForm />
      <Filter />
      <View style={{ flex: 1, width: "100%", marginTop: 15 }}>
        <TodoList />
      </View>
    </View>
  );
};

export default Home;
