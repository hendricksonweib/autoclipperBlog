import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cortesimg from "../src/assets/Cortes.svg";
import TitleCortesSession from './TitleCortesSession';

function CortesSession() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 col-xs-12 text-end">
          <img className="img-fluid" src={Cortesimg} alt="Cortesimg" />
        </div>
        <div className="col-md-6 col-xs-12">
          <TitleCortesSession />
        </div>
      </div>
    </div>
  );
}

export default CortesSession;
