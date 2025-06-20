import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FlatList, TextInput } from "react-native-web";
import { useState } from "react";
export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todos , setTodos] = useState([
    { id: "Date.now().toString()", title: "task 1", description: "react native" },

  ]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>
        TODO APP
      </Text>
      <TextInput style={styles.input} placeholder="Add title"  onChangeText={text => setTodoTitle(text)}/>
      <TextInput style={styles.input} placeholder="Add description" onChangeText={text => setTodoDescription(text)}/>
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7} onPress={() => {
        if (todoTitle.trim() && todoDescription.trim()) {
          console.log("Todo Added:", { title: todoTitle, description: todoDescription });
          setTodos([...todos, { id: Date.now().toString(), title: todoTitle, description: todoDescription }]);
          console.log("Todos:", todos);
          setTodoTitle("");
          setTodoDescription("");
        } else {
          alert("Please fill in both fields");
        }
      }}>
        <Text style={{ ...styles.text, color: "white" }}>Save</Text>
      </TouchableOpacity>
      <View style={{ ...styles.dividerLine, marginTop: 15 }} />
      <View style={{ ...styles.filterContainer, marginTop: 15 }}>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("All")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "All" ? "teal" : "black",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("Active")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "Active" ? "teal" : "black",
            }}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("Done")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "Done" ? "teal" : "black",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.text}>
            <Text style ={styles.t}>{item.title}</Text>
            <Text style={{ color: "gray" }}>{item.description}</Text>
          </View>
        )}
        style={{ width: "90%", marginTop: 20  }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
