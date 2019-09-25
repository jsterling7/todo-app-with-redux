import * as actionTypes from "./actionTypes";


export const toggleTodo = id => ({
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
});


export const setFilter = filter => ({
    type: actionTypes.SET_FILTER,
    payload: { filter }
});


export const addTodo = title => ({
   type: actionTypes.ADD_TODO,
   payload: { title }
});