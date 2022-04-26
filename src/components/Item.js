import React from 'react'
import ItemCount from './ItemCount';

const Item = (stock) => {

    const onAdd = (count) => {
        
    };


  return (


    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="/ropa-1.jpeg" alt="Sunset in the mountains"></img>
    <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">Vestido morley</div>
             <p class="text-gray-700 text-base">
              Color: Lila
              <br></br>
              Marca: 47 Street
              <br></br>
              Stock: 5
             </p>
     </div>
     <div class="px-6 pt-4 pb-2">

         <div class="px-6 pb-2 inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         <div class="text-gray-700 text-base">Agregar al carrito</div>

         <ItemCount stock={5} onAdd={onAdd} initial={1}/>

         </div>

     </div>
  </div>


  )
}

export default Item