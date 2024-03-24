import React, { useEffect } from 'react'; // Importe React e useEffect primeiro
import Cortesimg from "../src/assets/Cortes.svg";
import './css/CortDadosFt.css';

function CorteDadosFt() {
  useEffect(() => {
    const od1 = new Odometer({
      el: document.getElementById('state1'),
      value: 0
    });
    const od2 = new Odometer({
      el: document.getElementById('state2'),
      value: 0
    });
    const od3 = new Odometer({
      el: document.getElementById('state3'),
      value: 0
    });

    od1.update(79.3);
    od2.update(11);
    od3.update(9.7);
  }, []);

  return (
    <div>
      <img className="Cortesimg" src={Cortesimg} alt="Cortesimg" />
      <div className="numero">
        <h4 id="state1" className="odometer">0%</h4>
        <span id="span1">%</span>
      </div>
      <div className="numero">
        <h4 id="state2" className="odometer">0</h4>
        <span id="span2">%</span>
      </div>
      <div className="numero">
        <h4 id="state3" className="odometer">0</h4>
        <span id="span3">%</span>
      </div>
    </div>
  );
}

export default CorteDadosFt;
