import React, { Fragment, useState} from 'react';
// Import components
import Burger from './components/Burger';
import Cart from './components/Cart';
//Css
import './App.css';

function App() {

   // Estado de burgers con listado de burgers
  const [burgers, setBurgers] = useState([
    { id: 1, nombre: 'Burger completa', precio: 750 },
    { id: 2, nombre: 'Burger con cheddar', precio: 580 },
    { id: 3, nombre: 'Burger con jamón y quesó', precio: 550 },
    { id: 4, nombre: 'Burger con bacon', precio: 700 },
    { id: 5, nombre: 'Burger de pollo completa', precio: 640 }
  ]) 

   /* Estado del carrito */
   const [ cart, setCart] = useState([])

  return (
    <Fragment>
      <h3>Burgers</h3>
      {burgers.map((burger) => (
        <Burger
        key={burger.id}
        burger={burger}
        cart={cart}
        setCart={setCart}
        burgers={burgers}
    
        />
      ))}

      <Cart
       cart= {cart}
       setCart= {setCart}
      />
    </Fragment>
   
  );
}

export default App;
