import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoListSlice";

const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const addItem = () => {
        if (isValidInput()) {
            dispatch(
                addTodoItem({
                    id: Date.now(),
                    text: itemInput,
                    done: false,
                })
            );
            setItemInput("");
        } else {
            alert("Oops! It seems like your input is invalid. Please enter some text to continue.");
        }
    };

    const isValidInput = () => {
        return itemInput.trim() != null;
    };

    return (
        <div>
            <input
                type="text"
                value={itemInput}
                onChange={onItemChange}
                className="item-input"
                placeholder="What are you going to do today?"
                id="itemInput"
            />
            <button onClick={addItem} className="add-button">
                Add
            </button>
        </div>
    );
};

export default TodoGenerator;
