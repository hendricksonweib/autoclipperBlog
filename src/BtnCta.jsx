import React from 'react'
import './App.css'; 

function BtnCta(props) {
  return (
    <button className='navMainBtn' onClick={props.onClick}>{props.texto}</button>
  )
}

export default BtnCta