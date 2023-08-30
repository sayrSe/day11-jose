import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItem } from "./todoListSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = () => {
        dispatch(toggleTodoItem(props.todoItem.id));
    };

    const deleteItem = () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            dispatch(deleteTodoItem(props.todoItem.id));
        }
    };

    return (
        <>
            <div className="todo-item">
                <span
                    className={props.todoItem.done ? "done" : ""}
                    onClick={toggleItem}
                >
                    {props.todoItem.text}
                </span>
                <button className="delete-button" onClick={deleteItem}>
                    x
                </button>
            </div>
        </>
    );
};

export default TodoItem;
