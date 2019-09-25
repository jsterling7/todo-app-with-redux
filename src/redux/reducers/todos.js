import { TOGGLE_TODO } from "../actionTypes";


const initialState = {1: {id: 1, title: 'test', completed: false}, 2: {id: 2, title: 'fun', completed: false}};


const todos = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE_TODO:

            //handle todos as an object
            const newState = {...state};
            const currTodo = {...newState[action.payload.id]};
            newState[action.payload.id] = {...currTodo, completed: !currTodo.completed};

            //handle todos as an array
            // const todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
            // return {...state, todos}

            return newState;
        default:
            return state;
    }
};


export default todos;