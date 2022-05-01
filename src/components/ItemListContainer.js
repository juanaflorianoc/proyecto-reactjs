import React from 'react'
import ItemList from './ItemList'

import './Styles/ItemListContainer.css';

const ItemListContainer = ({title}) => {

  return (

    <div >
        <br></br>
        <br></br>
         <p>
             {title}
             <div className='item-container'>
             <ItemList/>
             </div>
         </p>
    </div>

  )
}

export default ItemListContainer