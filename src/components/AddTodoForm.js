import React, { useState } from 'react';


const AddTodoFrom = ({ addTodo }) => {

    const [todoName, setTodoName] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        setTodoName('');
        addTodo(todoName);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todoName} onChange={(event) => setTodoName(event.target.value)} />
                <button type='submit' >Add Todo</button>
            </form>
        </div>
    )
};


export default AddTodoFrom;