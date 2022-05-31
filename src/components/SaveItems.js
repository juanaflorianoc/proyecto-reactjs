import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'

const SaveItems = () => {

    const { products } = useAppContext()
    const { cart } = useCartContext();
    const prod = cart.map( ({pr}) => ({products})) 

    useEffect(() => {
        console.log( prod );
    }, [])

    const saveItems = async () => {
        const user = {
            name: 'Juana Floriano',
            phone: '2994730710',
            email: 'florianojuana@gmail.com'
        }

    const itemsToSave = {
        user: user,
        favs: prod,
        total: prod.length
    }

    console.log( itemsToSave );

    const db = getFirestore()
    const itemsCollection = collection(db, 'items')

    const response = await addDoc(itemsCollection, itemsToSave)
    console.log(response.id);
}


  return (
    <>
       <div>
           <button onClick={saveItems} className="btn"> Salvar lista de items </button>
       </div>

   </> 
  )
}

export default SaveItems