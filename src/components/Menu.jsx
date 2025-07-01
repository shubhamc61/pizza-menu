import React from 'react';
import Pizza from './Pizza';
import '../index.css';
import pizzaData from '../PizzaData';
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisines. 6 creative pizzas to choose from. All
            from stone oven, all organic, all delicious
          </p>
          <ul className='pizzas'>
            {pizzaData.map(pizza => (
              <Pizza pizzaType={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <h1>We are out of Pizzas! 🥲</h1>
      )}
    </main>
  );
}

export default Menu;
