import React from 'react';


const Todo = ({ todo, toggleTodo }) => (
   <li
    onClick={() => toggleTodo(todo.id)}
    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
   >
       {todo.title}
   </li>
);


export default Todo;
    
