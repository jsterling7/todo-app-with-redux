import React, { useState, useEffect } from 'react';
import SubmitButton from './pallet/SubmitButton';


const AddTodoFrom = ({ addTodo }) => {

    const [todoName, setTodoName] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const placeholders = ['make dinner', 'mow the lawn', 'go to the store'];
    const [placeholder, setPlaceholder]  = useState(placeholders[0]);

    useEffect(() => {
        const getNextPlaceHolder = () => {
            return placeholders[(placeholders.indexOf(placeholder) + 1) % placeholders.length]
        };
        let timer;
        if (!hasSubmitted) {
            timer = setTimeout(() => setPlaceholder(getNextPlaceHolder()), 3000)
        }
        return () => {
            clearTimeout(timer);
        }
    });


    const handleSubmit = event => {
        event.preventDefault();
        setTodoName('');
        if (!hasSubmitted) {
            setPlaceholder('');
            setHasSubmitted(true);
        }
        addTodo(todoName);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-inline">
                <input
                    className="form-control form-control-sm mr-1"
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                    placeholder={placeholder}
                />
                <SubmitButton title={'Add Todo'} type='primary' size='small'></SubmitButton>
            </form>
        </div>
    )
};


export default AddTodoFrom;