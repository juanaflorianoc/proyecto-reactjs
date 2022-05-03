import React from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../data/data';
import ItemCount from './ItemCount';

import './Styles/ItemListContainer.css';

const ItemDetail = ({name, image, price, info, id, stock}) => {

    const onAdd = (count) => {
        alert(`Has agregado ${count} prendas`);
    };


  return (

    <div className="detail-container" class="w-64 rounded overflow-hidden shadow-lg">

      <div className="detail-product-1">
      <img class="w-full" src={image} alt=""></img>
      </div>


      <div className="detail-product-2" class="px-6 py-4">
           <div class="font-bold text-xl mb-2">{name}</div>
               <p class="text-gray-700 text-base">${price}</p>
               <br></br>
               <p class="text-gray-700 text-base">{info}</p>

            <div class="px-6 pt-4 pb-2">
               <div class="px-6 pb-2 inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
              </div>
            </div>
      </div>

    </div>


  )
}

export default ItemDetail