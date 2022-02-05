import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo, increment } from '../Slices/TodoSlicer';
import Styled from 'styled-components';

const Form = Styled.form`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    `
const Input = Styled.input`
    font-size: 1.5em;
    text-align: center;
    color:grey;
    width:100%;
    `
const Button = Styled.button`
    font-size: 1.5em;
    color:turquoise;
    `
function input() {
    const [todo, setTodo] = useState({
        id: 0,
        text: '',
        completed: false
    });
    const dispatch = useDispatch();
    const value = useSelector(state => state.todos.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.text.trim()) {
            dispatch(addTodo(todo));
            dispatch(increment())
        }
        setTodo({
            id: todo.id,
            text: '',
            completed: false
        });
    }
    return <div>
        <Form onSubmit={handleSubmit} >
            <Input
                type="text"
                placeholder="Enter to do"
                onChange={(e) => {
                    setTodo({
                        id: value,
                        text: e.target.value,
                        completed: false
                    })
                }}
                value={todo.text}
            />
            <Button type="submit">Add</Button>
        </Form>
    </div>;
}

export default input;