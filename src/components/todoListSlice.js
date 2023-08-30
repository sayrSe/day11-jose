import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        doneTodoItem: (state, action) => {
            const todoItem = state.todoList[action.payload];
            todoItem.done = !todoItem.done;
        },
        deleteTodoItem: (state, action) => {
            const newTodoList = state.todoList.filter(todoItem => todoItem.id !== action.payload);
            state.todoList = newTodoList;
        },
    },
});

export const { addTodoItem, doneTodoItem, deleteTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;
