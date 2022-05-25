import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { useCartContext } from '../context/CartContext';

import './Styles/ItemListContainer.css';


const ItemCount = ({initial, stock, onAdd, id}) => {

   const [count, setCount] = useState(initial)

   const { addToCart } = useCartContext()
   const { products } = useAppContext()

   const addProduct = (num) => {
       setCount (count + num)
   }

   const handleClick = (id, cantidad) => {
     const findProduct = products.find((producto) => producto.id == id)

     if (!findProduct){
       alert("Error en la base de datos")
       return
     }

     addToCart (findProduct, cantidad)
     onAdd (count)
   }


  return (
    <>

            <div class="flex flex-col text-center mt-6 mr-6">
            <div class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
            <button class="text-white-700 text-base mr-4" onClick={ () => addProduct(-1)} disabled={count === initial ? true : null}> - </button>
            <strong class="text-white-700 text-base"> {count} </strong>
            <button class="text-white-700 text-base ml-4" onClick={ () => addProduct(+1)} disabled={count === stock ? true : null}> + </button>
            </div>

            <br></br>

            <div>
            <button
              className=''
              onClick={() => handleClick(id, count)}
            >
              Añadir al carrito
            </button>
            </div>
            </div>

    </>
  )
}

export default ItemCount