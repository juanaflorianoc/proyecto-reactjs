import React from 'react'
import ItemCount from './ItemCount';

const Item = ({name, image, price, id, stock}) => {

    const onAdd = (count) => {
        alert(`Has agregado ${count} prendas`);
    };


  return (

    <div className="item-list-container" class="w-64 rounded overflow-hidden shadow-lg">

      <img class="w-full" src={image} alt=""></img>
      <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">{name}</div>
               <p class="text-gray-700 text-base">
                {price}
               </p>
       </div>

       <div class="px-6 pt-4 pb-2">
       <div class="px-6 pb-2 inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
       </div>
       </div>
    </div>


  )
}

export default Item