import React from 'react';
import './App.css';

import ButtonNav from './ButtonNav';
import DomonstrarNav from './DemonstrarNav';
import TitleHeader from './TitleHeader'; // Importando o componente TitleHeader

import Logo from "../src/assets/Logo.svg";
import backgroundImg from "../src/assets/background.svg"; // Importando a imagem de fundo
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="Header" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container mt-3">
          <img className='logoImg' src={Logo} alt="LogoAutoClipper"/>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <ButtonNav texto="O quê?"/>
              </li>
              <li className="nav-item">
                <ButtonNav texto="Benefícios?"/>
              </li>
              <li className="nav-item">
                <ButtonNav texto="Para Quem?"/>
              </li>
              <li className="nav-item">
                <ButtonNav texto="Big Case"/>
              </li>
              <li className="nav-item">
                <ButtonNav texto="FAQ"/>
              </li>
              <li className="nav-item">
                <DomonstrarNav texto="Agende uma demonstração"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mt-5">
            <TitleHeader/>
          </div>
          <div className="col-12">
            <img src="" alt="" srcSet="" /> {/* Inserindo a imagem */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
