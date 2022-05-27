import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../data/data.js';
import ItemDetail from './ItemDetail.js';
import { collection, getDocs, getFirestore, query, getDoc, doc  } from "firebase/firestore";

import './Styles/ItemListContainer.css';

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {itemId } = useParams()

useEffect(() => {
  const db = getFirestore();

  const itemsCollection = doc(db, 'products', itemId);
  getDoc (itemsCollection).then ((snapshot)=>{
  const cat={ id: snapshot.id, ...snapshot.data()}
  setItem (cat)
   
  });
}, [itemId]) ;



  return (

    <div className='product-list-container'>
        
            <ItemDetail
                name={item.name}
                img={item.img}
                price={item.price}
                description={item.description}
                stock={item.stock}
                id={item.id}
            />

    </div>

  )
}






    /*<div className='product-list-container'>

        <ItemDetail
            name={itemdetail.name}
            img={itemdetail.img}
            price={itemdetail.price}
            description={itemdetail.description}
            stock={itemdetail.stock}
            id={itemdetail.id}
        />
                        

    </div>*/


export default ItemDetailContainer