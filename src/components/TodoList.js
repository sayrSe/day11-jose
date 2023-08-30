import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";

const TodoList = (props) => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <>
            <h1>Todo List</h1>
            <TodoGroup todoItems={todoItems} isDone={props.isDone}/>
            {props.isDone ? "": <TodoGenerator />}
        </>
    );
};

export default TodoList;
