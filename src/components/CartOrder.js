import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
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

    <div class="flex justify-center my-8">
     <div class="flex-initial w-4/12">
       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

         <h5 className="card-title">
            Ingrese los siguientes datos para confirmar la compra
         </h5>

         <br></br>

         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2">
           Nombre
           </label>
           <input 
           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
           id="username" 
           type="text" 
           placeholder="Nombre"
           onBlur={handleNameBlur} required
           />
         </div>


         <div class="mb-6">
           <label class="block text-gray-700 text-sm font-bold mb-2">
           Teléfono
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
           id="phone" 
           type="text" 
           placeholder="Teléfono"
           onBlur={handlePhoneBlur} required
           />
         </div>


         <div class="mb-6">
           <label class="block text-gray-700 text-sm font-bold mb-2">
           Email
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
           id="email" 
           type="email" 
           placeholder="Email"
           onBlur={handleEmailBlur} required
           />
         </div>

         <div class="flex items-center justify-between">
           <button class="bg-gray-400 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
           Confirmar
           </button>
           <a class="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-600" href="#">
           <Link to='/productos'>¿Querés seguir comprando?</Link>
           </a>
         </div>

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
                <div className='center'>
                <Link to="/">
                 <button className='home-intro'>Volver al inicio</button>
                </Link>
                </div>
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