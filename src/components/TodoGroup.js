import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = useSelector((state) => state.todoList.todoList);
    return todoItems.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                openModal={props.openModal}
            />
        );
    });
};

export default TodoGroup;
