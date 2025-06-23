import todoSlice from "./slices/TodoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        // Add your reducers here   
        todos: todoSlice.reducer, 
    },
});

export default store;