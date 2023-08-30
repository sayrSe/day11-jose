import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Space } from "antd";
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
                <Space.Compact>
                    <Button
                        type="primary"
                        ghost
                        onClick={props.openModal(props.todoItem)}
                    >
                        <EditFilled />
                    </Button>
                    <Button danger onClick={deleteItem}>
                        <DeleteFilled />
                    </Button>
                </Space.Compact>
            </div>
        </>
    );
};

export default TodoItem;
