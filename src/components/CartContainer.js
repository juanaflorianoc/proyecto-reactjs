import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Cart from './Cart';
import DeleteButton from "./DeleteButton";

const CartContainer = () => {
    const { clearCart, cart, deleteFromCart } = useCartContext();
    const cartPrint = cart.map((producto) => {
  
      function onSubstract() {
        deleteFromCart(producto.id);
      }
  
      const totalPrice = producto.stock * producto.price;
  
  
  
      return (
  
          <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Carrito de productos</h1>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del producto</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
  
  
           <Cart></Cart>
  
  
  
          <Link to="/productos" href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Seguir comprando
          </Link>
        </div>
  
        
  
      </div>
       </div>
          
          )});
    
  
      
  }

export default CartContainer