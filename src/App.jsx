import './App.css';
import Header from './Header'
import CortesSession from './CortesSession';
import ProcessosSession from './ProcessosSession';
import Who from './Who.jsx'; 
import Formulario from './Formulario.jsx';

function App() {
  return (
    <>
      <Header/>
      <CortesSession/>
      <ProcessosSession/>
      <Who/>
      <Formulario/>
    </>
  );
}

export default App;
