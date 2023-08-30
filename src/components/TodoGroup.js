import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = props.todoItems;
    return todoItems.map((todoItem) => {
        return <TodoItem todoItem={todoItem} key={todoItem.id} />;
    });
};

export default TodoGroup;
