import { Col, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";

const TodoList = () => {
    const { loadTodos } = useTodos();
    const [modalOpen, setModalOpen] = useState(false);
    const [editTodoText, setEditTodoText] = useState("");
    const { updateTodo } = useTodos();
    const [todoItem, setTodoItem] = useState({});

    const onChangeEditTodoItemText = (event) => {
        setEditTodoText(event.target.value);
    };

    const editTodoItem = (editTodoItem) => () => {
        setEditTodoText(editTodoItem.text);
        setTodoItem(editTodoItem);
        setModalOpen(true);
    };

    const updateTodoText = async () => {
        updateTodo(todoItem.id, { text: editTodoText });
        setModalOpen(false);
    };

    useEffect(() => {
        loadTodos();
    }, []);
    return (
        <>
            <h1>Todo List</h1>
            <Col>
                <TodoGroup openModal={editTodoItem} />
            </Col>
            <TodoGenerator />

            <Modal
                title="Edit Todo Item"
                centered
                open={modalOpen}
                onOk={updateTodoText}
                onCancel={() => setModalOpen(false)}
            >
                <Input
                    value={editTodoText}
                    onChange={onChangeEditTodoItemText}
                    id="editTodoText"
                />
            </Modal>
        </>
    );
};

export default TodoList;
