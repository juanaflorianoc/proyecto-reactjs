
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import './components/Styles/ItemListContainer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import Cart from './components/Cart';
import CartContainer from './components/CartContainer';
import CartOrder from './components/CartOrder';

function App() {


  return (


    <AppContextProvider>
    <CartContextProvider>
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
                path='/productos/:itemId' 
                element={<ItemDetailContainer/>}
             />
             <Route
                path='/cart'
                element={<Cart/>}
             />
             <Route
                path='/order'
                element={<CartOrder/>}
             />
           </Routes>
         </BrowserRouter>
     </CartContextProvider>
     </AppContextProvider>


  );
}

export default App;
