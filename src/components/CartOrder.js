import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import SaveItems from './SaveItems'
import './Styles/Home.css';

const CartOrder = () => {

    const { cart, total, deleteCart } = useCartContext();
    const [saleId, setSaleId] = useState(undefined);

    const [sale, setSale] = useState({

      buyer: {
        name: "",
        phone: "",
        email: "",
      },

      items: cart.map((i) => ({
        id: i.id,
        title: i.name,
        price: i.price,
        quantity: i.quantity,
      })),

      date: new Date(),
      total: total(),
    });

    const handleNameBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.name = e.target.value;
        setSale(newSale);
      };
    
      const handlePhoneBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.phone = e.target.value;
        setSale(newSale);
      };
    
      const handleEmailBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.email = e.target.value;
        setSale(newSale);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const db = getFirestore();
    
        sale.items.forEach((item) => {
          const docRef = doc(db, 'itemsData', item.id)
          updateDoc(docRef, {
            stock: increment(-item.quantity)
          })
        });
    
        const sales = collection(db, "productos ingresados");
        const response = await addDoc(sales, sale);
        setSaleId(response.id);
        deleteCart();
      };


  return (

    <>
    {cart && cart.length > 0 ? (
      <div className="card container mt-4" style={{maxWidth: "500px"}}>
        <div className="card-body">
          <h5 className="card-title">
            Ingrese los siguientes datos para confirmar la compra
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inptNombre"
                onBlur={handleNameBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="inptTelefono"
                onBlur={handlePhoneBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inptEmail"
                onBlur={handleEmailBlur}
                required
              />
            </div>
            <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    ) : (
 

            <div class="flex justify-between border-b pb-8">
                <>
                {saleId ? (
                <>
                <div className='home-title-contenedor'>
                <h1 className='home-title'> Compra exitosa 💘</h1>
                <p className='home-intro'> Su compra se ha registrado correctamente bajo el id "{saleId}"</p>
                <br></br>
                <Link to="/">
                 <button className='home-intro'>Volver al inicio</button>
                </Link>
                </div>
                </>
                ) : (
               <h5 className="card-title">Tu carrito esta vacio</h5>
               )}
               </>
          <div>


      </div>
      </div>
    )}
  </>
);
};

export default CartOrder