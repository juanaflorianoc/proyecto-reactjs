
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {


  const estilos = {
    color:'#D61F69'
  }


  return (

    <div className="App">

      <NavBar/>
      
      <h1 className='text-4xl' style={estilos}>ZEN concreto</h1>

      <ItemListContainer title={"Chequeá todas nuestras macetas acá abajo:"}/>
      


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
