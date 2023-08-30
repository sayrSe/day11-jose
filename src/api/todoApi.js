import api from "./api";

export const getAllTodoItems = () => {
	return api.get('/todos');
}

export const updateTodoTask = (id, todoItem) => {
	return api.put(`/todos/${id}`, todoItem);
}

export const addTodoTask = (todoItem) => {
	return api.post(`/todos`, todoItem);
}