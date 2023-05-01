const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
];

const todoReducer = (state = initialState, action = {}) => {
    //regresamos el nuevo estado:
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo', //la accion
    payload: newTodo,
}; //lo que va dentro de la accion, payload no siempre se añáde.

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
