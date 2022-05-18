import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import DeleteButton from "./DeleteButton";

const Cart = () => {
  const { clearCart, cart, deleteFromCart } = useCartContext();

  const cartPrint = cart.map((producto) => {
    function onSubstract() {
      deleteFromCart(producto.id);
    }

    const totalPrice = producto.cant * producto.price;



    return (
        <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-left">
        <tr key={producto.id}>
          <th>•</th>
          <td className=""> 
           <Link className="btn btn-link w-36" to={`/cart/${producto.id}`}> 
             <span>
               {producto.name} {producto.price}
             </span>
           </Link>
          </td>
          <td>{producto.stock}</td>
          <td>${totalPrice}</td>
          <td><DeleteButton onSubstract={onSubstract}/></td>
        </tr>    
      </tbody>
    </table>
  </div>)});
  
  //       <li key={cart.id}>
  //         <Link className="btn btn-link" to={`/car/${producto.id}`}>
  //           {" "}
  //           <span>
  //             {producto.brand} {producto.model}{" "}
  //           </span>{" "}
  //         </Link>
  //         <span>x {producto.cant} = </span>
  //         <span>USD ${totalPrice}</span>
  //         <DeleteButton onSubstract={onSubstract} />
  //       </li>
  //     );
  //   });
  
    if (cart.length === 0) {
      return (
        <div className="text-center">
          <h3 className="mt-32">No has agregado productos</h3>
          <Link className="absolute mb-16 inset-x-0 bottom-0" to="/">
            <button data-theme="emerald" class="btn btn-wide">Volver al Inicio</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div data-theme="emerald">
          <div>
            <ul>{cartPrint}</ul>
          </div>
          <div className="absolute inset-x-0 bottom-0">
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