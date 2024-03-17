import React from 'react';
import empresasimg from "../src/assets/empresas.svg";
import empresasNameimg from "../src/assets/empresasName.svg";
import './css/Cicle.css';

export default function Cicle() {
  return (
    <div className="d-flex flex-column align-items-center position-relative mt-5">
      <img className='empresasimg position-absolute top-50 start-50 translate-middle' src={empresasimg} alt="empresasimg" />
      <img className='empresasNameimg rotate-animation' src={empresasNameimg} alt="empresasNameimg" />
    </div>
  );
}