import React from 'react';
import Input from './input';
import Todos from './todos'
import Styled from 'styled-components';
const Container = Styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    padding:20px;
    width:60%;
    margin:auto;
    `
function TodoApp() {
    return <Container>
        <h1>Todo App</h1>
        <Input />
        <Todos />
    </Container>;
}

export default TodoApp;