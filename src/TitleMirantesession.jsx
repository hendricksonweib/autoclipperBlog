import React from 'react';
import Number from './Number';

function TitleMirantesession() {
    return (
        <>
            <div className="d-flex flex-column align-items-center text-center">
                <div className="flexContainer d-flex mb-0">
                    <h1 className="boldTxt mx-2">BIG</h1>
                    <h1 className="smallTxt m-0">Case</h1>
                </div>
                <p className="ptxt mt-0 pt-0">RÁDIO &nbsp;&nbsp; MIRANTE &nbsp;&nbsp; FM</p>
            </div>
            <div className="legendaDados">
                <Number title="+80" paragraph="Crescimento na geração da receita" />
                <Number title="+20" paragraph="Média de crescimento de inscritos" />
            </div>
        </>

    );
}

export default TitleMirantesession;
