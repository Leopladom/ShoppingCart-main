import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import Button from '@mui/material/Button';
import Formulario from "./Formulario";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [metodoPago, setMetodoPago] = useState(null);
  const [datosTarjeta, setDatosTarjeta] = useState({});

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleFormSubmit = () => {
    if (
      (metodoPago === "transferencia" &&
        datosTarjeta.cbu.trim() !== "" &&
        datosTarjeta.nombreDestinatario.trim() !== "") ||
      (metodoPago === "tarjeta" &&
        datosTarjeta.numeroTarjeta.length === 16 &&
        datosTarjeta.fechaVencimiento.length === 5 &&
        datosTarjeta.cvv.length === 3)
    ) {
      alert("Compra realizada con éxito. Una vez que verifiquemos los datos, se realizará el envío");
    } else {
      alert("Por favor, complete los detalles de pago.");
    }
  };

  const cartContainerStyle = {
    marginBottom: '6%', // Ajusta este valor según la altura de tu footer
  };

  return (
    <div className="cart-container" style={cartContainerStyle}>
      <div>
        <br /><br /><br />
        <h2>Items Agregados:</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.imgUrl} alt={item.name} width="50" height="50" />
            <div>{item.name}</div>
            <div>Cantidad: {item.quantity}</div>
            <Button onClick={() => handleIncrease(item.id)} variant="contained" color="primary">+</Button>
            <Button onClick={() => handleDecrease(item.id)} variant="contained" color="primary">-</Button>
            <Button onClick={() => handleRemove(item.id)} variant="contained" color="secondary">Eliminar</Button>
          </div>
        ))}
        <br />
        <div>Total: ${cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)}</div>
        <br />
        <Formulario
          setMetodoPago={setMetodoPago}
          setDatosTarjeta={setDatosTarjeta}
          datosTarjeta={datosTarjeta}
        />
        <br />
        <Button onClick={handleFormSubmit} variant="contained" color="secondary" disabled={!metodoPago}>
          Realizar Compra
        </Button>
        <br /><br /><br /><br />
      </div>
    </div>
  );
};

export default ShoppingCart;
