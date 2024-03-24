import React from 'react';
import W1Img from "../src/assets/W1.svg";
import W2Img from "../src/assets/W2.svg";
import W3Img from "../src/assets/W3.svg";
import W4Img from "../src/assets/W4.svg";
import { Container, Row, Col } from 'react-bootstrap';
import './css/Who.css';

function Who() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 conteinerTudo">
            <h1 className="title mb-4">
                Para Quem é a Autoclipper?
            </h1>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={6} sm={6} md={3} className="icon text-center mb-3">
                        <img className='WImg' src={W1Img} alt="Rádio Web" />
                        <p>Rádio Web</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} className="icon text-center mb-3">
                        <img className='WImg' src={W2Img} alt="Podcasts" />
                        <p>Podcasts</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} className="icon text-center mb-3">
                        <img className='WImg' src={W3Img} alt="TVs Online" />
                        <p>TVs Online</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} className="icon text-center mb-3">
                        <img className='WImg' src={W4Img} alt="Criadores de conteúdos" />
                        <p>Criadores de conteúdos</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Who;
