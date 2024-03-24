import React from 'react';


const DomonstrarNAv = (props) => {
  const handleClick = () => {
    document.getElementById(props.targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className='liNavBtn' onClick={props.handleClick}>{props.texto}</button>
  );
}

export default DomonstrarNAv