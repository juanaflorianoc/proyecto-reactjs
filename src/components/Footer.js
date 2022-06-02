import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF} from 'react-icons/fa';
import './Styles/Footer.css';


const Footer = () => {


  return (

    <>

       <div className="footer-contenedor">

           <p class="footer-items"> Seguinos en nuestras redes sociales </p>
           <ul class="wrapper ">
              <li class="icon facebook " href="https://www.facebook.com/cambalacheropasinfin/">
                <span class="tooltip">Facebook</span>
                <FaFacebookF></FaFacebookF>
              </li>
              <li class="icon instagram" href="https://www.instagram.com/cambalacheropa/">
                <span class="tooltip">Instagram</span>
                <AiFillInstagram></AiFillInstagram>
              </li>
            </ul>

           <p class="footer-copyright"> COPYRIGHT CAMBALACHE ROPA SIN FIN - 2021. TODOS LOS DERECHOS RESERVADOS. </p>

       </div>


    </>

  )
}

export default Footer