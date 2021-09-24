import React from 'react';
import Card from '../Card/Card';

const TodoList = ({ todos }) => {
    const todoArray = todos.map((todo, i ) => {
        return (
            <Card 
            key={i}
            todoText={todos[i]} 
            />
        )

    })
    
    return (
        <>
            {todoArray}
       </>
    )

    }

export default TodoList;