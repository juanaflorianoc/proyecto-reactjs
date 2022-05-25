import React, { useEffect, useState } from 'react'
import Item from './Item';
import { productList } from '../data/data.js';
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

import './Styles/ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemList = () => {

const {categoryId} = useParams()
const [item, setItem] = useState([]);

useEffect(() => {
  const db = getFirestore();
  const getItem = async () => {

    const MyItem = categoryId
        ? query(collection(db, "products"))
        : collection(db, "products")
    const querySnapshot = await getDocs(MyItem)
    setItem(
      querySnapshot.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })
    )
  }

  getItem()
}, [categoryId] )

    /*const getProducts = new Promise ((resolve, reject) => {
           resolve(productList);
    });

    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (error) {
            console.log (error);
            alert (`No podemos mostrar los productos en este momento`);
        }
    };

    useEffect(() => {
        getProductsFromDB();
    }, []);*/


  return (

    <div className='product-list-container'>
        {
          item.length ? (
              <>
              {
                  item.map((it) => {
                      return (
                         <div key={it.id}>
                             <Item
                               name={it.name}
                               img={it.img}
                               price={it.price}
                               stock={it.stock}
                               id={it.id}
                             />
                         </div>
                      );
                  })
              }
            </>
          ) : (
          <p>Cargando productos..</p>
          )
        }
    </div>
  );
};

export default ItemList