import api from "./api";

export const getAllTodoItems = () => {
	return api.get('/todos');
}