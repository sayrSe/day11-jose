import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        resetAllTodoItems: (state, action) => {
            state.todoList = action.payload;
        },
    },
});

export const { resetAllTodoItems } = todoListSlice.actions;
export default todoListSlice.reducer;
