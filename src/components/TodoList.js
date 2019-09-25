import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => {
    const todosList = todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>);
    return (
         <div>{todosList}</div>
    )
};

export default TodoList;