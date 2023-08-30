import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItem } from "./todoListSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = () => {
        if (props.isDone) {
            console.log("Go to details page");
        } else {
            dispatch(toggleTodoItem(props.todoItem.id));
        }
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
                    className={
                        props.isDone ? "" : props.todoItem.done ? "done" : ""
                    }
                    onClick={toggleItem}
                >
                    {props.todoItem.text}
                </span>
                {props.isDone ? (
                    ""
                ) : (
                    <button className="delete-button" onClick={deleteItem}>
                        x
                    </button>
                )}
            </div>
        </>
    );
};

export default TodoItem;
