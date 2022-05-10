import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (


  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-7 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">

      <Link to='/' href="" class="flex items-center">
          <img src="../img/logo.png" class="mr-3 h-6 sm:h-9" alt="cambalache logo" />
      </Link>

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

          <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-pink-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"><Link to='/'>Home</Link></a>
          </li>
          <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-pink-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link to='/productos'>Productos</Link></a>
          </li>
          <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-pink-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link to='/comocomprar'>Cómo comprar</Link></a>
          </li>
          <div>
              <CartWidget/>
          </div>

        </ul>
      </div>

    </div>
  </nav>


  )
}

export default NavBar