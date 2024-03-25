import './App.css';
import Header from './Header'
import CortesSession from './CortesSession';
import ProcessosSession from './ProcessosSession';
import Who from './Who.jsx'; 
import BigCase from './BigCase.jsx'
import Formulario from './Formulario.jsx';
import Parceiros from './Parceiros.jsx';
import Accordion from './Accordion.jsx';
import FooterSession from './FooterSession.jsx';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header/>
      <CortesSession/>
      <ProcessosSession/>
      <Who/>
      <BigCase/>
      <div id="Formulario">
        <Formulario />
      </div>
      <Parceiros/>
      <Accordion/> 
      <FooterSession/>
      <Analytics />
    </>
  );
}

export default App;
