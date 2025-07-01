import React from 'react';

function Pizza({ pizzaType }) {
  return (
    <li className={pizzaType.soldOut ? 'pizza sold-out' : 'pizza '}>
      <img src={pizzaType.photoName} alt={pizzaType.name}></img>
      <div>
        <h3>{pizzaType.name}</h3>
        <p>{pizzaType.ingredients}</p>
        <span>
          {pizzaType.soldOut ? 'SOLD OUT' : `${Number(pizzaType.price)} Euros`}
        </span>
      </div>
    </li>
  );
}

export default Pizza;
