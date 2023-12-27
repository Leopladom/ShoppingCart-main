import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import Button from '@mui/material/Button';

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const gastaste = "Gastaste: ";
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <br /><br /><br />
        <div><h2>Items Agregados:</h2> <h3>{quantity}</h3></div>
        <br />
        <div>Total: ${totalPrice}</div>
        <br />
                
        <Button onClick={() => alert(gastaste+totalPrice)} variant="contained" color="secondary">Realizar Compra</Button>
        <br /><br /><br /><br />
      </div>
      
    </div>
  );
};
