import React, { useEffect, useState } from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

   console.log('aquí hay un render del componente contador')
   const [count, setCount] = useState(initial)

   const addProduct = (num) => {
       setCount (count + num)
   }


  return (
    <>

            <div class="bg-pink-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
            <button class="text-white-700 text-base" onClick={ () => addProduct(-1)} disabled={count === initial ? true : null}> - </button>
            <strong class="text-white-700 text-base"> {count} </strong>
            <button class="text-white-700 text-base" onClick={ () => addProduct(+1)} disabled={count === stock ? true : null}> + </button>
            </div>
            <br></br>
            <button onClick={() => onAdd (count)} disabled={stock === 0 ? true : null}> Añadir </button>

    </>
  )
}

export default ItemCount