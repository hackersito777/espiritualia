// AcercaDe.js

import React from 'react';
import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <h1>Bienvenido a Espiritualia</h1>
      <p>Somos un sitio web sin ánimo de lucro ubicado en la hermosa ciudad de Medellín.</p>
      <p>Nuestra misión es proporcionar inspiración y recursos espirituales para todos.</p>
      <h2>Nuestra Historia</h2>
      <p>
        Espiritualia nació con la visión de crear un espacio digital donde las personas puedan encontrar
        paz, inspiración y reflexión espiritual. Desde nuestro hogar en Medellín, hemos trabajado
        para compartir mensajes positivos y significativos con la comunidad global.
      </p>
      <h2>Frases Bíblicas</h2>
      <blockquote>
        <p>"El Señor es mi pastor; nada me faltará." - Salmo 23:1</p>
      </blockquote>
      <blockquote>
        <p>"Confía en el Señor con todo tu corazón y no te apoyes en tu propio entendimiento." - Proverbios 3:5</p>
      </blockquote>
    </div>
  );
};

export default AcercaDe;
