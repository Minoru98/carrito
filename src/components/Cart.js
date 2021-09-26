import React from 'react'
// Import css Cart
import './cart.css'
//Import components burger
import Burger from './Burger'

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>0</p>
      ) : (
        cart.map((burger) => (
          <Burger
            key={burger.id}
            burger={burger}
            cart={cart}
            setCart={setCart}
          />
        ))
      )}
    </div>
  )
}

export default Cart
