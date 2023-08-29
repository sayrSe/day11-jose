import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";

const TodoList = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoGroup todoItems={todoItems} />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
