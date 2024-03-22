import React, { useEffect } from 'react';
import Cortesimg from "../src/assets/Cortes.svg";
import './css/CortesSession.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CortesSession() {
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
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <img className="Cortesimg" src={Cortesimg} alt="Cortesimg" />
          <div className="numero">
            <h4 id="state1" className="odometer">0</h4>
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
        <div className="col-sm-7">
          <div className="navMainH2">
            <h1 className="fontH2">Cresça com a estratégia <br />de conteúdo dos maiores <br />canais de entretenimento,<br /> notícias e educação!</h1>
            <button className="btnH2">Aumente sua audiência</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CortesSession;
