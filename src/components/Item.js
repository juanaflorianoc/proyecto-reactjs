import React from 'react'
import ItemCount from './ItemCount';

import './Styles/ItemListContainer.css';

const Item = ({name, image, price, id, stock}) => {

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
               <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"> Más info </button>
       </div>
    </div>
    </div>


  )
}

export default Item