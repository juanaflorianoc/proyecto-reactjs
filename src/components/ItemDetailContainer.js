import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../data/data.js';
import ItemDetail from './ItemDetail.js';

import './Styles/ItemListContainer.css';

const ItemDetailContainer = () => {

    const {productosId} = useParams()
    const [productsdetail, setProductsdetail] = useState([]);

    useEffect(() => {
      setProductsdetail (productList.find(pd => pd.id == productosId))
    }, [productosId])


  return (

    <div className='product-list-container'>

        <ItemDetail
            name={productsdetail.name}
            image={productsdetail.image}
            price={productsdetail.price}
            info={productsdetail.info}
            stock={productsdetail.stock}
            id={productsdetail.id}
        />
                        

    </div>
  );
};

export default ItemDetailContainer