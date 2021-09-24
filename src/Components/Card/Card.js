import React from 'react';
import './Card.css';

const Card = ({ todoText}) => {
    return (
        <div className=''>
            <div className='todo-card'>
                <h2>{todoText}</h2>
            </div>
        </div>

    )
}

export default Card;