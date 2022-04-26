import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {


  const estilos = {
    color:'#D61F69'
  }


  return (

    <div className="App">

      <NavBar/>
      
      <h1 className='text-4xl' style={estilos}>Hola mundo</h1>

      <ItemListContainer title={"¡Hola! Nosotras somos Cambalache y vendemos ropa usada en perfecto estado. Próximamente nuestra lista de productos la verás aquí abajo."}/>
      


      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

    </div>
  );
}

export default App;
