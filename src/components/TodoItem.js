import { useTodos } from "../hooks/useTodos";

const TodoItem = (props) => {
    const { toggleTodo, deleteTodo } = useTodos();

    const toggleItem = async () => {
        toggleTodo(props.todoItem.id, props.todoItem);
    };

    const deleteItem = async () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            deleteTodo(props.todoItem.id);
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
