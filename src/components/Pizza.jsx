import React from 'react';
import pizzaData from '../PizzaData';

function Pizza() {
  const pizza = pizzaData[0];

  return (
    <div>
      <img src='pizzas/focaccia.jpg' alt='focaccia'></img>
      <h2>{pizza.name}</h2>
      <p>{pizza.ingredients}</p>
    </div>
  );
}

export default Pizza;
