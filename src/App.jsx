import './App.css';
import Header from './Header'
import CortesSession from './CortesSession';
import ProcessosSession from './ProcessosSession';
import Who from './Who.jsx'; 
import BigCase from './BigCase.jsx'
import Formulario from './Formulario.jsx';
import Parceiros from './Parceiros.jsx';
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
      <Parceiros/>
      {/* <Accordion/>  */}
    </>
  );
}

export default App;
