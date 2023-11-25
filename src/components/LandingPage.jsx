import React from 'react';
import "./LandingPage.css"
import l1 from "../assets/l1.jpg"
import l2 from "../assets/l2.jpg"
import l3 from "../assets/l3.jpg"


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Espiritualia</h1>
        <p>""Te damos la bienvenida a Espiritualia, un espacio donde la gracia divina se encuentra con la vida cotidiana.""</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Amor</h2>
          <p>
"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad, sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta." 1 Corintios 13:4-7 (NVI):</p>
          <img src={l1} alt="Característica 1" />
        </div>
        <div className="feature">
          <h2>Fe</h2>
          <p>
"La fe es la confianza de que lo que esperamos sucederá; nos da la certeza de las cosas que no podemos ver." Hebreos 11:1 (NTV):</p>
          <img src={l2} alt="Característica 2" />
        </div>
        <div className="feature">
          <h2>Esperanza</h2>
          <p>"Les deseo que el Dios de nuestra esperanza los llene de alegría y paz a medida que confían en él. Luego, serán rebosantes de esperanza por el poder del Espíritu Santo." Romanos 15:13 (NTV):</p>
          <img src={l3} alt="Característica 3" />
        </div>
      </section>
      <section className="cta">
        <h2>¡Regístrate para el Futuro!</h2>
        <p>Únete a nosotros para ser parte de la revolución.</p>
        <button  className="cta-button"><a href='https://api.whatsapp.com/send?phone=573174327691'>Contactame</a></button>
      </section>
      <section className="testimonial">
        <blockquote>
          <p>"¡Esta empresa es un viaje al futuro! Resultados asombrosos y tecnología de vanguardia."</p>
          <cite>Cliente del Futuro</cite>
        </blockquote>
      </section>
      <footer>
        <p>© 2023 Tu Empresa Futurista. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
