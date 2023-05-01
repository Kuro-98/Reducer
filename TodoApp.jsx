import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

    return (
        <>
            <div>
                TodoApp: {todosCount} , <small>Pendientes: {pendingTodosCount}</small>
            </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todo={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={(todo) => handleNewTodo(todo)} />
                </div>
            </div>
        </>
    );
};
