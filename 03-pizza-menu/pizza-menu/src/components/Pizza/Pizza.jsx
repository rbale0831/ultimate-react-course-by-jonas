import React from 'react';
import "./Pizza.css"


const Pizza = ({ name, ingredient, price }) => {
    return (
        <div className='pizza'>
            <img src={spinaci} alt="pizza image" />
            <div>
                <h3>{name}</h3>
                <p>{ingredient}</p>
                <span>{price}</span>
            </div>
        </div>
    );
}

export default Pizza;