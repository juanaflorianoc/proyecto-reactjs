import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { useCartContext } from '../context/CartContext';

import './Styles/ItemListContainer.css';


const ItemCount = ({initial, stock, onAdd, id}) => {

   console.log('aquí hay un render del componente contador')
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

            <div class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
            <button class="text-white-700 text-base" onClick={ () => addProduct(-1)} disabled={count === initial ? true : null}> - </button>
            <strong class="text-white-700 text-base"> {count} </strong>
            <button class="text-white-700 text-base" onClick={ () => addProduct(+1)} disabled={count === stock ? true : null}> + </button>
            </div>
            <br></br>
            {/*<button onClick={() => onAdd (count)} disabled={stock === 0 ? true : null}> Añadir al carrito </button>*/}
            <button
              className=''
              onClick={() => handleClick(id, count)}
            >
              Añadir al carrito
            </button>

    </>
  )
}

export default ItemCount