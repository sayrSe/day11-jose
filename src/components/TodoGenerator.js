import { Button, Input, Row, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../../src/api/todoApi";
import { resetAllTodoItems } from "./todoListSlice";

const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const addItem = async () => {
        if (isValidInput()) {
            await todoApi.addTodoItem({
                id: Date.now().toString(),
                text: itemInput,
                done: false,
            });
            const response = await todoApi.getAllTodoItems();
            dispatch(resetAllTodoItems(response.data));
            setItemInput("");
        } else {
            alert(
                "Oops! It seems like your input is invalid. Please enter some text to continue."
            );
        }
    };

    const isValidInput = () => {
        return itemInput.trim() !== "";
    };

    return (
        <Row>
            <Space.Compact
                style={{
                    width: "100%",
                    marginTop: "10px",
                }}
            >
                <Input
                    size="large"
                    value={itemInput}
                    placeholder="What are you going to do today?"
                    onChange={onItemChange}
                    id="itemInput"
                />
                <Button size="large" type="primary" onClick={addItem}>
                    Add
                </Button>
            </Space.Compact>
        </Row>
    );
};

export default TodoGenerator;
