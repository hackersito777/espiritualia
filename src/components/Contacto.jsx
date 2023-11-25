// Contacto.js

import React from 'react';
import './Contacto.css';
import { FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>¡Hablemos!</h1>
      <p>
        ¿Listo para iniciar una conversación que te acerque a tus metas? Estoy aquí para ayudarte.
        Envíame un mensaje a través de WhatsApp y comencemos este viaje juntos.
      </p>
      <a
        href="https://wa.me/tuNumeroDeTelefono" // Reemplaza "tuNumeroDeTelefono" con tu número de teléfono de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp className="whatsapp-icon" />
        ¡Contactar por WhatsApp!
      </a>
    </div>
  );
};

export default Contacto;
