import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";
import { resetAllTodoItems } from "./todoListSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const response = await todoApi.getAllTodoItems();
            dispatch(resetAllTodoItems(response.data));
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </>
    );
};

export default TodoList;
