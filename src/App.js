import React, { useState, useEffect } from 'react';
import './App.css';
// import Card from './Components/Card/Card.js';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import { myTodos } from './myTodos.js';

const App = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        console.log(todos)
    },[todos])
    return (
        <div className='container'>
            <h1>To-do List</h1>
            <TodoInput 
                setTodos={setTodos}
                todos={todos}/>
            <div className='card-container'>
                <TodoList 
                    todos={todos}/>
            </div>
            
        </div>
    )
}

export default App;