import React from 'react';
import BtnCta from './BtnCta';

export default function TitleHeader() {
  const handleScroll = () => {
    document.getElementById('Formulario').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <p className="navMainP">E AÍ? BORA AUMENTAR A AUDIÊNCIA?</p>
      <h1 className="navMainH1">Impulsione em <br />até 8X o seu<br />conteúdo!</h1>
      <h6 class="navMainH6">Crie uma Máquina de Cortes Automática para o YouTube! </h6>
      <BtnCta targetId="Formulario" handleClick={handleScroll}  texto="Agende uma demonstração"/>
    </div>
  );
}
