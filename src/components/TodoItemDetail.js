import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoItemDetail = () => {
    const { id } = useParams();
    const todoItem = useSelector((state) =>
        state.todoList.todoList.find((todoItem) => todoItem.id === id)
    );
    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todoItem.id}</div>
            <div>{todoItem.text}</div>
        </div>
    );
};

export default TodoItemDetail;
