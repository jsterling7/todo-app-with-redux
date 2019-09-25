import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => {
    const todosList = todos.map(todo => <li><Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/></li>);
    return (
         <div>
             <ul>
                {todosList}
             </ul>
         </div>
    )
};

export default TodoList;