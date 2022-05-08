
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import './components/Styles/ItemListContainer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';

function App() {


  return (


     <BrowserRouter>

       <NavBar></NavBar>

       <Routes>
         <Route 
            path='/' 
            element={<Home></Home>}
        />
         <Route 
            path='/productos' 
            element={<ItemListContainer></ItemListContainer>}
        />
         <Route 
            path='/productos/:productosId' 
            element={<ItemDetailContainer/>}
            />
       </Routes>

     </BrowserRouter>

  );
}

export default App;
