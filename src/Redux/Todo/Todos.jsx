import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../Slices/TodoSlicer';
import { useState } from 'react';
import Styles from 'styled-components'
const Container = Styles.div`
background-color: #f5f5f5;
border-radius: 5px;
padding: 20px;
margin: 10px;
`

const Todo = Styles.div`
display:flex;
width:100%;
justify-content:space-between;
font-size:1.5em;
margin:10px;
background-color: #fff;
cursor: pointer;
`
function todos() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const [style, setStyle] = useState({
        textDecoration: 'none'
    });

    let completed = false;

    return <div>
        <Container>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    onClick={() => {
                        dispatch(toggleTodo(todo.id));
                        if (todo.completed) {
                            setStyle({
                                textDecoration: 'line-through'
                            })
                        } else {
                            setStyle({
                                textDecoration: 'none'
                            })
                        }
                    }}
                    style={style}
                >
                    <span>{todo.text}</span>

                    <button
                        onClick={() => {
                            dispatch(removeTodo(todo.id))
                        }}>
                        X
                    </button>
                </Todo>
            )
            }
        </Container>

    </div >;
}

export default todos;