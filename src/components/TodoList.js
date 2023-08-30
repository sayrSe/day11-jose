import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todoApi from "../api/todoApi";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";
import { resetAllTodoItems } from "./todoListSlice";

const TodoList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        todoApi
            .getAllTodoItems()
            .then((response) => dispatch(resetAllTodoItems(response.data)));
    }, []);
    const todoItems = useSelector((state) => state.todoList.todoList);
    return (
        <>
            <h1>Todo List</h1>
            <TodoGroup todoItems={todoItems} isDone={props.isDone} />
            <TodoGenerator />
        </>
    );
};

export default TodoList;
