import { useDispatch } from "react-redux";
import * as todoApi from "../../src/api/todoApi";
import { resetAllTodoItems } from "./todoListSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = async () => {
        await todoApi.updateTodoTask(props.todoItem.id, {
            done: !props.todoItem.done,
        });
        const response = await todoApi.getAllTodoItems();
        dispatch(resetAllTodoItems(response.data));
    };

    const deleteItem = async () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            await todoApi.deleteTodoTask(props.todoItem.id, {
                done: !props.todoItem.done,
            });
            const response = await todoApi.getAllTodoItems();
            dispatch(resetAllTodoItems(response.data));
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
