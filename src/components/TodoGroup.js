import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = props.todoItems;
    return todoItems.map((todoItem, index) => {
        return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} />;
    });
};

export default TodoGroup;
