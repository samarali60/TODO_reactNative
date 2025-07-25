import { createSlice } from "@reduxjs/toolkit";
export const FILTRATION_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: FILTRATION_TYPES.ALL,
  },
  reducers: {
    addTodo: (state, action) => {
      // Add a new todo to the state
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    removeTodo: (state, action) => {
      // Remove a todo from the state by its id
      const idToRemove = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== idToRemove);
    },
    markAsCompleted: (state, action) => {
      // Mark a todo as completed by its id
      const idToComplete = action.payload;
      const todo = state.todos.find((todo) => todo.id === idToComplete);
      if (todo) {
        todo.completed = true;
      }
    },
    setFilter: (state, action) => {
      // Set the current filter type
      state.filter = action.payload;
    },
  },
});
export const { addTodo, removeTodo, markAsCompleted, setFilter ,setTodos } =
  todoSlice.actions;
export default todoSlice;
