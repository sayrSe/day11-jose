import { useDispatch } from "react-redux";
import { deleteTodoItem, doneTodoItem } from "./todoListSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleDone = () => {
        dispatch(doneTodoItem(props.index));
    };

    const deleteItem = () => {
        dispatch(deleteTodoItem(props.index));
    };

    return (
        <>
            <div className="todo-item">
                <span
                    className={props.todoItem.done ? "done" : ""}
                    onClick={toggleDone}
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
