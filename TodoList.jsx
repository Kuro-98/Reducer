import { TodoItem } from './TodoItem';

export const TodoList = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {todo.map((todoChiquito) => (
                <TodoItem
                    key={todoChiquito.id}
                    toto={todoChiquito}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};
