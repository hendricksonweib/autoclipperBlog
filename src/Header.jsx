import React from 'react';
import './App.css'; 
import ButtonNav from './ButtonNav';
import DomonstrarNAv from './DemonstrarNav';
import Logo from "../src/assets/Logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="backgroundImg"></div>
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
              <DomonstrarNAv texto="Agende uma demonstração"/>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
