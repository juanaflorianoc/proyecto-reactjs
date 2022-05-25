import React, { useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ProductDetail = () => {

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'products')
        getDocs(itemsCollection).then( snapshot => {
          snapshot.docs.forEach( s => {
            console.log( s.data() );
          })
        })
      }, [])


  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail