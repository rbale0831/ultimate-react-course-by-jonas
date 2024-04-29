import React from "react";
import "./App.css";

const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

const Header = () => {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <>
      <main className='menu'>
        <h2>Our Menu</h2>

        {/* {numPizza > 0 &&
          (
            <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.id} pizzaObj={pizza} />
            ))}
            </ul>
          )} */}
        {numPizza > 0 ?
          (
            <>
              <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
              </p>
              <ul className="pizzas">
                {pizzas.map((pizza) => (
                  <Pizza key={pizza.id} pizzaObj={pizza} />
                ))}
              </ul>
            </>
          ) : (<p>We're still working on our menu. Please come back later :)</p>)}

        {/* <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato, mozarella, spinach, and ricotta cheese"
          photoName={spinaci}
          price={10}
        />
        <Pizza
          name="Pizza Funhi"
          ingredient="Tomato, mozarella, spinach, and ricotta cheese"
          photoName={funghi}
          price={12}
        /> */}
      </main>
    </>
  )
}

const Pizza = ({ pizzaObj }) => {
  // console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} }`}>
      <img src={pizzaObj.photoName} alt="pizza image" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>) : (
          <span>{pizzaObj.price}</span>)}
        {/* <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span> */}
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen)

  // if (!)

  return (
    <>
      {/* <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open</footer> */}
      <div className="order">
        <footer className="footer">
          {/* {isOpen && <p>we're open untill {closeHour}:00. Come visit us or order online.</p>} */}
          {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />) : (
            <Closed closeHour={closeHour} openHour={openHour} />)}
        </footer>
      </div>
    </>
  )
}

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const Closed = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
    </div>
  );
}


export default App;