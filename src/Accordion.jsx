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
                <div className="col-8 mt-4">
                    <BootstrapAccordion defaultActiveKey="0">
                        <BootstrapAccordion.Item eventKey="0">
                            <BootstrapAccordion.Header style={{ backgroundColor: 'black', color: 'white' }}>O que é a Autoclipper e como ela pode ajudar na entrega de conteúdo?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                A Autoclipper é uma solução que impulsiona a entrega de conteúdo, permitindo que você crie uma máquina de cortes automática para o YouTube. Isso significa que você pode reutilizar horas de vídeos gravados, transformando-os em novos formatos rapidamente. Ela também ajuda a crescer sua estratégia de conteúdo, seguindo os passos dos maiores canais de entretenimento, notícias e educação. Agende uma demonstração para saber mais!
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="1">
                            <BootstrapAccordion.Header style={{ backgroundColor: 'black', color: 'white' }}>Quais são os principais benefícios de usar a Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                ●  Escolha os melhores clipes de para o seu conteúdo de forma facilitada.<br />
                                ●  Edite e legende de forma automática.
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="2">
                            <BootstrapAccordion.Header style={{ backgroundColor: 'black', color: 'white' }}>Para quem é destinado o serviço da Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                ● Rádios Web<br />
                                ● TVs Online<br />
                                ● Podcasts<br />
                                ● Criadores de conteúdo<br />
                                Se você faz parte de algum desses grupos, agende uma demonstração conosco!s<br />
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="3">
                            <BootstrapAccordion.Header style={{ backgroundColor: 'black', color: 'white' }}>Quais resultados posso esperar ao usar a Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                ●  Edite clipes 10 x mais rápidos, utilizando a nossa Inteligência Artificial.
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                        <BootstrapAccordion.Item eventKey="4">
                            <BootstrapAccordion.Header style={{ backgroundColor: 'black', color: 'white' }}>Quanto custa os serviços da Autoclipper?</BootstrapAccordion.Header>
                            <BootstrapAccordion.Body>
                                Atualmente estamos em teste alpha, disponibilizamos a autoclipper apenas para parceiros qualificados. Faça a sua inscrição e participe da lista de usuários alpha.
                            </BootstrapAccordion.Body>
                        </BootstrapAccordion.Item>
                    </BootstrapAccordion>
                </div>
            </div>
        </div>
    );
}

export default MyAccordion;
