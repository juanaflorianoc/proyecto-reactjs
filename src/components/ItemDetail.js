import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { productList } from '../data/data';
import Spinner from './CommonComponents/Spinner';
import ItemCount from './ItemCount';

import './Styles/ItemListContainer.css';

const ItemDetail = ({name, image, price, info, id, stock, productsdetail}) => {

    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar(true)
    };

    return (


      <div class="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image} alt="Album"/></figure>
           <div class="card-body">
             <h2 class="card-title">{name}</h2>
             <p>${price}</p>
             <p>${info}</p>
               <div class="card-actions justify-end mt-6 mr-6">
               {terminar ? (
                   <Link to="/cart" className=''>
                     Ir al carrito
                   </Link>
                 ) : (
                   <ItemCount stock={stock} onAdd={onAdd} initial={1} id={id}/>
                 )}
               </div>
           </div>
      </div>



    )
}

export default ItemDetail