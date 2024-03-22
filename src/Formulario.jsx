import React from 'react';
import BtnCta from './BtnCta';
import '../src/css/Formulario.css'

function Formulario() {
    return (
        <div className="bgforms">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="titleForm mb-3">
                        Deixe o seu melhor contato<br></br>para uma demonstração
                    </h1>
                    <p className="pforms mb-4">Tenha uma máquina de cortes utilizando os serviços da AutoClipper.</p>
                    <div className="inputsform col-12 d-flex flex-column align-items-center">
                        <div className="form-group col-12 mb-3">
                            <label htmlFor="nome" className='d-flex flex-column align-items-start mb-2'>Nome</label>
                            <input type="text" className="form-control" id="nome" placeholder='Ex: João Silva' />
                        </div>
                        <div className="form-group col-12 mb-3">
                            <label htmlFor="email" className='d-flex flex-column align-items-start mb-2'>E-mail</label>
                            <input type="text" className="form-control" id="email" placeholder='Ex: joao.silva@corporativo.com' />
                        </div>
                        <div className="form-group col-12 mb-3">
                            <label htmlFor="telefone" className='d-flex flex-column align-items-start mb-2'>Telefone</label>
                            <input type="text" className="form-control" id="telefone" placeholder='Ex: 5511999999999' />
                        </div>
                    </div>
                    <BtnCta texto="Enviar" />
                </div>
            </div>
        </div>
    );
}

export default Formulario;
