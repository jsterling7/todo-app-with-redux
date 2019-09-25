import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    console.log(todos);
    const todosList = todos.map(todo => <li key={todo.id} className='list-group-item'><Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/></li>);
    return (
         <div>
             <ul className='list-group'>
                {todosList}
             </ul>
         </div>
    )
};

export default TodoList;