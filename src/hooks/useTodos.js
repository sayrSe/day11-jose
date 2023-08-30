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
        await todoApi.addTodoTask(todoItem);
        loadTodos();
    };

    const toggleTodo = async (id, todoItem) => {
        await todoApi.updateTodoTask(id, {done: !todoItem.done});
        loadTodos();
    };

    const deleteTodo = async (id) => {
        await todoApi.deleteTodoTask(id);
        loadTodos();
    };

    return {
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
    };
};
