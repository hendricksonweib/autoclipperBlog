import React from 'react';
import fila1Img from "../src/assets/fila1.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Parceiros.css'


function Parceiros() {
  return (
    <div className="Parceiros">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center">
            <h1 className="parceirosH1">Empresas<br />Parceiras</h1>
          </div>
          <div className="col-md-7 text-center">
            <img className="fila1Img" src={fila1Img} alt="Logo parceiros" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
