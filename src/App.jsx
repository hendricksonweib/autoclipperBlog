import './App.css';
import Header from './Header'
import CortesSession from './CortesSession';
import ProcessosSession from './ProcessosSession';
import Who from './Who.jsx'; 
import BigCase from './BigCase.jsx';

function App() {
  return (
    <>
      <Header/>
      <CortesSession/>
      <ProcessosSession/>
      <Who/>
      <BigCase/>
    </>
  );
}

export default App;
