import React from 'react'
import Pizza from "../Pizza/Pizza";
import "./Menu.css"
import spinaci from '../../assets/images/pizzas/spinaci.jpg'
import funghi from '../../assets/images/pizzas/funghi.jpg'

const Menu = () => {
    return (
        <>
            <main className='menu'>
                <h2>Our Menu</h2>

                <Pizza
                    name="Pizza Spinaci"
                    ingredient="Tomato, mozarella, spinach, and ricotta cheese"
                    price="10"
                />
                <img src={funghi} alt="pizza image" />
                <Pizza
                    name="Pizza Funhi"
                    ingredient="Tomato, mozarella, spinach, and ricotta cheese"
                    price="10"
                />
            </main>
        </>
    )
}

export default Menu;