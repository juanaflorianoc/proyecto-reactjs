import React from 'react'
import ProductDetail from './firebase-examples/ProductDetail';
import './Styles/Home.css';

const Home = () => {

  return (
    <>

    <div className='home-title-contenedor'>
        <h1 className='home-title'> Zen Concreto </h1>
        <p className='home-intro'> Hola! Soy Sofi 🖐🏼 Arquitecta en este mundo de concreto y creatividad. Creamos objetos unicos con un impacto ♻️</p>
    </div>

    <div>
      <ProductDetail></ProductDetail>
    </div>

    </>

  )

}

export default Home