import React from 'react'
import Item from './Item'

const ItemListContainer = ({title}) => {

  return (

    <div>
        <br></br>
        <br></br>
         <p>
             {title}
             <Item/>
         </p>
    </div>

  )
}

export default ItemListContainer