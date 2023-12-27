import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    height: '2%',
    width: '96.87%',
  };

  return (
    <div style={footerStyle}>
      <h1>Leonardo Plaza Todos los Derechos Reservados</h1>
    </div>
  );
};

export default Footer;
