import './App.css';
import Header from './Header'
import CortesSession from './CortesSession';
import ProcessosSession from './ProcessosSession';
import Who from './Who.jsx'; 
import BigCase from './BigCase.jsx'
import Formulario from './Formulario.jsx';
import Accordion from './Accordion.jsx';

function App() {
  return (
    <>
      <Header/>
      <CortesSession/>
      <ProcessosSession/>
      <Who/>
      <BigCase/>
      <Formulario/>
      <Accordion/>
    </>
  );
}

export default App;
