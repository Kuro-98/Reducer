export const TodoItem = ({ toto, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${toto.done && 'text-decoration-line-through'}`}
                onClick={() => onToggleTodo(toto.id)}
            >
                {toto.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(toto.id)}
            >
                Borrar
            </button>
        </li>
    );
};
