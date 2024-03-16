import React from 'react';


const ButtonNav = (props) => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };
    return (
        <button className='ButtonNav' onClick={props.onClick}>{props.texto}</button>
      );
    }

export default ButtonNav;