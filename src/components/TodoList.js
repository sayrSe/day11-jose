import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";

const TodoList = () => {
    const { loadTodos } = useTodos();
    useEffect(() => {
        loadTodos();
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
