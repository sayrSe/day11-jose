import { useDispatch } from "react-redux";
import * as todoApi from "../../src/api/todoApi";
import { resetAllTodoItems } from "../components/todoListSlice";

export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await todoApi.getAllTodoItems();
        dispatch(resetAllTodoItems(response.data));
    }

    const addTodo = async (todoItem) => {
        await todoApi.addTodoItem(todoItem);
        loadTodos();
    };

    const updateTodo = async (id, todoItem) => {
        await todoApi.updateTodoItem(id, { text: todoItem.text });
        loadTodos();
    };

    const toggleTodo = async (id, todoItem) => {
        await todoApi.updateTodoItem(id, { done: !todoItem.done });
        loadTodos();
    };

    const deleteTodo = async (id) => {
        await todoApi.deleteTodoItem(id);
        loadTodos();
    };

    return {
        loadTodos,
        addTodo,
        updateTodo,
        toggleTodo,
        deleteTodo,
    };
};
