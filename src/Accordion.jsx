import React from 'react';
import BootstrapAccordion from 'react-bootstrap/Accordion';
import '../src/css/Accordion.css'

function MyAccordion() {
    return (
        <div className="accordionBg">
            <div className="d-flex justify-content-center">
                <h1 className="AccordionH1">Perguntas Frequentes</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 mt-4">
                    <BootstrapAccordion defaultActiveKey="0">
                        <BootstrapAccordion.Item eventKey="0">
                            <BootstrapAccordion.Header>O que é a Autoclipper e como ela pode ajudar na entrega de conteúdo?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                texto
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="1">
                            <BootstrapAccordion.Header>Quais são os principais benefícios de usar a Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                texto
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="2">
                            <BootstrapAccordion.Header>Para quem é destinado o serviço da Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                texto
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="3">
                            <BootstrapAccordion.Header>Quais resultados posso esperar ao usar a Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                texto
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="4">
                            <BootstrapAccordion.Header>Quanto custa os serviços da Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                texto
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                    </BootstrapAccordion>
                </div>
            </div>
        </div>
    );
}

export default MyAccordion;
