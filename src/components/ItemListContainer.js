import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({title}) => {

  return (

    <div>
        <br></br>
        <br></br>
         <p>
             {title}
             <ItemList/>
         </p>
    </div>

  )
}

export default ItemListContainer