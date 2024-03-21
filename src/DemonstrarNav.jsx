import React from 'react';


const DomonstrarNAv = (props) => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };
  return (
    <button className='liNavBtn' onClick={props.onClick}>{props.texto}</button>
  );
}

export default DomonstrarNAv