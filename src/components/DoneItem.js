import { useNavigate } from "react-router-dom";

const DoneItem = (props) => {
    const navigate = useNavigate();

    const onClickTodoItem = () => {
        navigate("/done/" + props.todoItem.id);
    };

    return (
        <>
            <div className="todo-item">
                <span onClick={onClickTodoItem}>{props.todoItem.text}</span>
            </div>
        </>
    );
};

export default DoneItem;
