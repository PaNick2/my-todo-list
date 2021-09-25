import React, { useEffect, useState } from 'react';
import './TodoInput.css';


const TodoInput = ({ todos, setTodos }) => {
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          todosUpdate()
        }
      }
    const [searchfield, setSearchfield] = useState("")
    const updatedArray = todos
    function todosUpdate() {
        if (searchfield.length !== 0){
            // console.log('You clicked the Add to-do button')
            updatedArray.push(searchfield);
            setTodos([...updatedArray]);
            // console.log(updatedArray)
            // console.log(todos)
            setSearchfield("")
        }
    }
    return (
        <div className='input-container'>
            <input 
                id="myInput" 
                type='text' 
                placeholder='Add a new to-do'  
                value={searchfield} 
                onChange={e => setSearchfield(e.target.value)}
                onKeyPress={handleKeyPress}
                />
            <button 
                id="addButton"
                onClick={todosUpdate}
                type='button'>
                <b>Add to-do</b>
            </button>
        </div>
    )
}

export default TodoInput;