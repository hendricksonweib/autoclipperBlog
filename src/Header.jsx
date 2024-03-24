import React from 'react';
import './App.css';

import ButtonNav from './ButtonNav';
import DomonstrarNav from './DemonstrarNav';
import TitleHeader from './TitleHeader';
import Phones from './Phones';
import Cicle from './Cicle';

import LogoImg from '../public/Logo.svg';
import grupoMiranteImg from "../src/assets/grupoMirante.svg";
import logoAdueloImg from "../src/assets/logoAduelo.svg";
import miranteAm from "../src/assets/miranteAm.svg";
import backgroundImg from "../src/assets/background.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

const header = () => {
  return (
    <div className="Header" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container mt-3">
          <img className='logoImg' src={LogoImg} alt="LogoAutoClipper" />
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" style={{backgroundColor:'white'}} data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <ButtonNav texto="O quê?" />
              </li>
              <li className="nav-item">
                <ButtonNav texto="Benefícios?" />
              </li>
              <li className="nav-item">
                <ButtonNav texto="Para Quem?" />
              </li>
              <li className="nav-item">
                <ButtonNav texto="Big Case" />
              </li>
              <li className="nav-item">
                <ButtonNav texto="FAQ" />
              </li>
              <li className="nav-item">
                <DomonstrarNav texto="Agende uma demonstração" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row d-flex flex-column-reverse flex-lg-row mt-5">
          <div className="col-lg-12 mt-1">
            <TitleHeader />
          </div>
          <div className="col-lg-12">
            <Phones />
          </div>
          <div className="col-lg-3 offset-lg-0">
            <Cicle />
          </div>
        </div>
      </div>
      <footer className='navfooter'>
        <img className='logoAdueloImg' src={logoAdueloImg} alt="logoAdueloImg" />
        <img className='grupoMiranteImg' src={grupoMiranteImg} alt="grupoMiranteImg" />
        <img className='miranteAm' src={miranteAm} alt="miranteAm" />
      </footer>
    </div>
  )
}

export default header;
""