import uuid from 'uuid/v4';
import {TOGGLE_TODO, ADD_TODO, DELETE_TODO} from "../actionTypes";


const initialState = {};


const todos = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case TOGGLE_TODO:
            //handle todos as an object
            const currTodo = {...newState[action.payload.id]};
            newState[action.payload.id] = {...currTodo, completed: !currTodo.completed};

            //handle todos as an array
            // const todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
            // return {...state, todos}

            return newState;
        case ADD_TODO:
            const id = uuid();
            newState[id] = {id, title: action.payload.title, completed: false}
            return newState;
        case DELETE_TODO:
            delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }

};


export default todos;