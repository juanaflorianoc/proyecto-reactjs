import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import DeleteButton from "./DeleteButton";
import SaveItems from "./SaveItems";

const Cart = () => {

  const { clearCart, cart, deleteFromCart, total } = useCartContext();
  const cartPrint = cart.map((producto) => {

    function onSubstract() {
      deleteFromCart(producto.id);
    }

    const totalPrice = producto.quantity * producto.price;

    return (
    <>
            {/* PRODUCTO */}
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={producto.id}>
                  <div class="flex w-2/5">
                      <div class="w-20">
                          <img class="h-24" src={producto.img} alt=""></img>
                      </div>

                      <div class="flex flex-col justify-between ml-4 flex-grow">
                         <span class="font-bold text-sm">{producto.name}</span>
                         <span class="text-gray-500 text-xs">{producto.description}</span>
                         {/* ELIMINAR PRODUCTO*/}
                         <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs"><DeleteButton onSubstract={onSubstract}/></a>
                     </div>
                  </div>

                  <div class="flex justify-center w-1/5">
                     <span class="text-center w-1/5 font-semibold text-sm">{producto.quantity}</span>
                  </div>

                  <span class="text-center w-1/5 font-semibold text-sm">${producto.price}</span>
                  <span class="text-center w-1/5 font-semibold text-sm">${totalPrice}</span>
             </div>
    </>
   )});


  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h3 className="mt-32">No has agregado productos</h3>
        <Link className="absolute mb-16 inset-x-0 bottom-0" to="/productos">
          <button data-theme="emerald" class="btn btn-wide">Volver a todos los productos</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div data-theme="emerald">

        {/*productos container*/}
        <div>
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
                    <ul>{cartPrint}</ul>
                  <Link to="/productos" href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                   Seguir comprando
                  </Link>
              </div>

              <div class="w-1/4 bg-white px-10 py-10">
                <div class="card text-center dark bg-light">
                    <div class="flex justify-between border-b pb-8">
                      <h1 class="font-semibold text-2xl"> Check Box </h1>
                    </div>

                    {/* llamar el total de todos los productos */}
                    <div class="card-body content-center">
                      <h5 class="text-3xl mt-5">Total compra</h5>
                      <p class="text-2xl">${total()}</p>
                    </div>

                    <div>
                    <Link className="" to="/order">
                        <button data-theme="emerald" class="btn btn-wide">Terminar compra</button>
                    </Link>
                    </div>

                </div>
              </div>

          </div>
          </div>
        </div>

        <div className="flex font-semibold text-indigo-600 text-sm mt-10">
          <button
            onClick={clearCart}
            className="
           mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal
           uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg
           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
           "
          >
            Borrar Todo
          </button>
        </div>
      </div>

    );
  }
}


export default Cart;