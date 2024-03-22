import React from 'react';
import '../src/css/BigCase.css';
import { Container, Row, Col } from 'react-bootstrap';
import MiranteSessionImg from "../src/assets/miranteSession.svg";

function BigCase() {
    return (
        <div className="BigCase">
            <Container>
                <Row className="align-items-center justify-content-center text-center">
                    <Col md={12} className="mb-4 mb-md-0 gap-col">
                        <div className="imgs d-flex justify-content-end">
                            <img className="MiranteSessionImg" src={MiranteSessionImg} alt="MiranteSessionImg" />
                        </div>
                    </Col>
                </Row>
                <div className='conteiner'>
                    <div className="text">
                        <h1 className="bold">BIG</h1>
                        <h1 className="light">Case</h1>
                    </div>
                    <div className="titlesub">
                        <p className='subP'>RÁDIO &nbsp;&nbsp;  MIRANTE&nbsp;&nbsp;   FM</p>
                    </div>
                    <div className="textNumber">
                        <div className="dados">
                            <h1 className="number">+80<span>%</span></h1>
                            <p className="subtext">Crescimento na<br /> geração da receita</p>
                        </div>
                        <div className="dados" style={{ marginLeft: '2rem' }}> {/* Corrigido para usar aspas */}
                            <h1 className="number">+20<span>%</span></h1>
                            <p className="subtext">Média de crescimento<br /> geração da receita</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BigCase;
