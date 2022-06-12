import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/Home.css';

const Home = () => {

  return (
    <>

    <div className='home-title-contenedor'>
        <h1 className='home-title'> Zen Concreto </h1>
        <p className='home-intro'> Hola! Soy Sofi 🖐🏼 Arquitecta en este mundo de concreto y creatividad. Creamos objetos unicos con un impacto ♻️</p>
        <br></br>
        <br></br>
        <div className="center">
        <Link className="home-button" to='/productos'> Ver todos los productos</Link>
        </div>
    </div>

    </>

  )

}

export default Home