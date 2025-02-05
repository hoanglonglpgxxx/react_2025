import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero repellat,
        placeat laborum, beatae tenetur magni eos blanditiis aut ratione quo doloremque
        exercitationem quas voluptatibus magnam consequatur quibusdam sed sequi?
      </p>
      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza key={index} pizzaObj={pizza} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

Pizza.propTypes = {
  pizzaObj: PropTypes.object.isRequired,
};

function Footer() {
  return (
    <footer className="footer">
      <Order />
    </footer>
  );
}

function Order() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const statusMsg = isOpen ? "We're currently open!" : "Sorry we're closed!";
  return (
    <div className="order">
      <>
        {new Date().toLocaleTimeString()}. {statusMsg}
        {isOpen && <button className="btn">Order now</button>}
        {/* using ternary case */}
        {/* {isOpen ? <button className="btn">Order now</button> : null} */}
      </>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
