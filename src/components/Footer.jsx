import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    height: '6%',
    width: '96.87%',
    
  };

  return (
    <div style={footerStyle}>
      
      <p>Contáctenos:</p>
      <p>Teléfono: +54 03516221155</p>
      <p>Correo Electrónico: info@lplaza.com</p>
      <p>Dirección: Calle Falsa 123 Ciudad Imaginaria</p>
    </div>
  );
};

export default Footer;
