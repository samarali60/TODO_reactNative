import { Text, TouchableOpacity,TextInput } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const TodoForm = ({ onSubmit }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const handleSubmit = () => {
      if (todoTitle.trim() && todoDescription.trim()) {
        console.log("Todo Added:", {
          title: todoTitle,
          description: todoDescription,
        });
        const todo = {
          id: Math.random().toString(),
          title: todoTitle,
          description: todoDescription,
          completed: false,
        };
        onSubmit(todo);
        // Reset the form fields
        setTodoTitle("");
        setTodoDescription("");
      } else {
        alert("Please fill in both fields");
      }
   
  };
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Add title"
        onChangeText={(text) => setTodoTitle(text)}
        value={todoTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Add description"
        onChangeText={(text) => setTodoDescription(text)}
        value={todoDescription}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.7}
        onPress={handleSubmit}
      >
        <Text style={{ ...styles.text, color: "white" }}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
