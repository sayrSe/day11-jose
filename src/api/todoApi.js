import api from "./api";

export const getAllTodoItems = () => {
    return api.get("/todos");
};

export const toggleTodoItem = (id, todoItem) => {
    return api.put(`/todos/${id}`, todoItem);
};

export const addTodoItem = (todoItem) => {
    return api.post(`/todos`, todoItem);
};

export const deleteTodoItem = (id) => {
    return api.delete(`/todos/${id}`);
};
