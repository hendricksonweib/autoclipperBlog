import React from 'react';
import './css/ProcessosSession.css';
import bgsessionImg from "../src/assets/bgsession.svg";
import fotoImg from "../src/assets/foto.svg";
import icon1Img from "../src/assets/icon1.svg";
import icon2Img from "../src/assets/icon2.svg";
import icon3Img from "../src/assets/icon3.svg";

function ProcessosSession() {
  return (
    <div>
      <div className="conteiner mt-4 d-flex flex-column align-items-center position-relative">
        <img className='bgsessionImg' src={bgsessionImg} alt="bgsessionImg" />
        <img className='fotoImg' src={fotoImg} alt="fotoImg" />
        <h1 className='titleProcess'>Nós cuidados<br />do processo de<br />ponta-a-ponta</h1>
        <div className="tags">
          <ul>
            <div className="txtli">
              <img className='icon1Img' src={icon1Img} alt="icon1Img" />
              <li>Escolha dos melhores clipes de acordo<br />com o cliente e consumo da audiência.</li>
            </div>
            <div className="txtli">
              <img className='icon2Img' src={icon2Img} alt="icon2Img" />
              <li>Edição dos cortes em diversos formatos.</li>
            </div>
            <div className="txtli">
              <img className='icon3Img' src={icon3Img} alt="icon3Img" />
              <li>Postagem e gerenciamento do canal<br />do YouTube.</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessosSession;
