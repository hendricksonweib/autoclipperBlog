import React from 'react';
import './css/CortesSession.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CorteDadosFt from './CorteDadosFt';
import TitleCortesSession from './TitleCortesSession';

function CortesSession() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <CorteDadosFt />
        </div>
        <div className="col-md-6 col-xs-12">
          <TitleCortesSession />
        </div>
      </div>
    </div>
  );
}

export default CortesSession;
