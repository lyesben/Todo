import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    value: 0
};
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        addTodo: (state, action) => {
            console.log(action);
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            let todo = state.todos.find(todo => todo.id === action.payload);
            todo.completed = !todo.completed;
            console.log(todo);
        }
    }
});
export const { increment, addTodo, removeTodo, toggleTodo, lineThrow } = todoSlice.actions;
export default todoSlice.reducer;