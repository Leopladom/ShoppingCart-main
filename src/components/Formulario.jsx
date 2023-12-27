import React, { useState } from "react";

const Formulario = ({ setMetodoPago, datosTarjeta, setDatosTarjeta }) => {
  const [metodoPago, setMetodoPagoSeleccionado] = useState("");
  const [camposCompletos, setCamposCompletos] = useState(false);

  const handleMetodoPagoChange = (event) => {
    setMetodoPagoSeleccionado(event.target.value);
    setMetodoPago(event.target.value);
  };

  const handleDatosTarjetaChange = (event) => {
    const { name, value } = event.target;
    setDatosTarjeta((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handlePagoConTarjeta = () => {
    if (
      (metodoPago === "tarjeta" &&
        datosTarjeta.numeroTarjeta.length === 16 &&
        datosTarjeta.fechaVencimiento.length === 5 &&
        datosTarjeta.cvv.length === 3) ||
      (metodoPago === "transferencia" &&
        datosTarjeta.cbu.trim() !== "" &&
        datosTarjeta.nombreDestinatario.trim() !== "")
    ) {
      if (metodoPago === "tarjeta") {
        setDatosTarjeta({ ...datosTarjeta, completado: true });
      }
      setMetodoPago(metodoPago);
      setCamposCompletos(true);
    } else {
      setCamposCompletos(false);
      alert("Por favor, complete los detalles del método de pago correctamente.");
    }
  };

  return (
    <div>
      <h3>Seleccione un método de pago:</h3>
      <select onChange={handleMetodoPagoChange}>
        <option value="tarjeta">Pago con tarjeta</option>
        <option value="transferencia">Transferencia</option>
      </select>

      {metodoPago === "tarjeta" && (
        <div>
          <input
            type="text"
            placeholder="Número de tarjeta"
            onChange={handleDatosTarjetaChange}
            name="numeroTarjeta"
            maxLength={16}
          />
          <br />
          <input
            type="text"
            placeholder="Fecha de vencimiento (MM/YY)"
            onChange={handleDatosTarjetaChange}
            name="fechaVencimiento"
            maxLength={5}
          />
          <br />
          <input
            type="text"
            placeholder="CVV"
            onChange={handleDatosTarjetaChange}
            name="cvv"
            maxLength={3}
          />
        </div>
      )}

      {metodoPago === "transferencia" && (
        <div>
          <input
            type="text"
            placeholder="CBU del destinatario"
            onChange={handleDatosTarjetaChange}
            name="cbu"
            maxLength={22}
          />
          <br />
          <input
            type="text"
            placeholder="Nombre del destinatario"
            onChange={handleDatosTarjetaChange}
            name="nombreDestinatario"
            maxLength={20}
          />
        </div>
      )}

    </div>
  );
};

export default Formulario;
