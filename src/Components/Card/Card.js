import React from 'react';
import './Card.css';

const Card = ({ id, todoText}) => {
    return (
        <div className=''>
            <ul className='todo-card'>
                <div className="eachItem">
                    <li>
                        <p
                            onClick={event => event.target.classList.toggle("checked")}>{todoText}
                        </p>
                    </li>
                    {/* <button>
                            <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
                    </button> */}
                </div>
                
                {/* <li><p onClick={event => event.target.remove()}>{todoText}</p></li> */}
            </ul>
        </div>

    )
}

export default Card;