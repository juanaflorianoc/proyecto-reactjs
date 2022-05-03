import React from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

import './Styles/ItemListContainer.css';

const Item = ({name, image, price, id, stock}) => {

    const {productosId} = useParams()

    const onAdd = (count) => {
        alert(`Has agregado ${count} prendas`);
    };


  return (

    <div>
    <div class="rounded overflow-hidden shadow-lg">

      <img class="w-full" src={image} alt=""></img>
      <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">{name}</div>
               <p class="text-gray-700 text-base">
                ${price}
               </p>
               <br></br>
               <Link to={`/productos/${id}`} class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"> Más info </Link>
       </div>
    </div>
    </div>


  )
}

export default Item