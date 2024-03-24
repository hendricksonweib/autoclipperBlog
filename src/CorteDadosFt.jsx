import React, { useEffect } from 'react'; // Importe React e useEffect primeiro
import Cortesimg from "../src/assets/Cortes.svg";
import './css/CortDadosFt.css';

function CorteDadosFt() {

  return (
    <div>
      <img className="Cortesimg" src={Cortesimg} alt="Cortesimg" />
    </div>
  );
}

export default CorteDadosFt;
