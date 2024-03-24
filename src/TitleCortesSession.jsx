import React from 'react';
import './css/CortesSession.css';

function TitleCortesSession() {
  const handleClick = () => {
    document.getElementById('Formulario').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="navMainH2">
      <h1 className="fontH2">Cresça com a estratégia <br />de conteúdo dos maiores <br />canais de entretenimento,<br /> notícias e educação!</h1>
      <button className="btnH2" onClick={handleClick}>Aumente sua audiência</button>
    </div>
  );
}

export default TitleCortesSession;
