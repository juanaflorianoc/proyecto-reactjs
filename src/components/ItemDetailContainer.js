import React, { useEffect, useState } from 'react'
import { productList } from '../data/data.js';
import ItemDetail from './ItemDetail.js';

import './Styles/ItemListContainer.css';

const ItemDetailContainer = () => {


    const [productsdetail, setProductsdetail] = useState([]);

    const getProductsdetail = new Promise ((resolve, reject) => {
       setTimeout(() => {
           //const find = productList.find(item => item.name === 'Maceta BALI')
           //const pd = productList.filter(productList.d < 2);
           resolve(productList);
       }, 2000);
    });

    const getProductsFromDBdetail = async () => {
        try {
            const result = await getProductsdetail;
            setProductsdetail(result);
        } catch (error) {
            console.log (error);
            alert (`No podemos mostrar los productos en este momento`);
        }
    };

    useEffect(() => {
        getProductsFromDBdetail();
    }, []);


  return (

    <div className='product-list-container'>
        {
          productsdetail.length ? (
              <>
              {
                  productsdetail.filter(pd => pd.id <2).map((product) => {
                      return (
                         <div key={product.id}>
                             <ItemDetail
                             //name del ItemDetail = {product (ProductList) . name (productList)}
                               name={product.name}
                               image={product.image}
                               price={product.price}
                               info={product.info}
                               stock={product.stock}
                               id={product.id}
                             />
                         </div>
                      );
                  })
              }
            </>
          ) : (
          <p>Cargando detalles de producto..</p>
          )
        }
    </div>
  );
};

export default ItemDetailContainer