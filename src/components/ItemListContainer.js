import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList'

import './Styles/ItemListContainer.css';

const ItemListContainer = () => {

  return (

    <div >
        <br></br>
        <br></br>
         <p>
             <div className='items-container'>
             <ItemList/>
             </div>
         </p>
    </div>

  )
}

export default ItemListContainer