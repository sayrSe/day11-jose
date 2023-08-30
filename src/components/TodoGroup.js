import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = props.isDone
        ? props.todoItems.filter((todoItem) => todoItem.done)
        : props.todoItems;
    return todoItems.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                isDone={props.isDone}
            />
        );
    });
};

export default TodoGroup;
