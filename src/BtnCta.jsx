import React from 'react'
import './App.css'; 

function BtnCta(props) {
  const handleClick = () => {
    document.getElementById(props.targetId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button className='navMainBtn' onClick={props.handleClick}>{props.texto}</button>
  )
}

export default BtnCta