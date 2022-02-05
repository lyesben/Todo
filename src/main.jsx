import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './Redux/Store'
import './index.css'

import Counter from './Counter.jsx'
// import Todo from './Redux/Todo'

import TodoApp from './Redux/Todo/TodoApp'
ReactDOM.render(
  
        <Provider store={store}>
        {/* <Todo/> */}
            <TodoApp />
        </Provider>

    , document.getElementById('root'))