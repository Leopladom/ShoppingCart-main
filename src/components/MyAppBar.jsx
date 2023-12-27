import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import { CartContext } from "../contexts/ShoppingCartContext";
import { useContext } from "react";

export default function MyAppBar() {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> {/* Alineación a la derecha */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {/* Utilizamos el componente Link para hacer que la palabra "Tienda" sea un botón */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">
                <Typography variant="h6" component="div">
                "ShopCart"
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        
            Items Comprados: <span className="cart-count" style={{ marginLeft: '8px',color:"tomato" }}>{quantity}</span> {/* Espacio entre el botón Carrito y los Items Comprados */}
            <Button color="inherit" component={Link} to="/cart">Carrito</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
