import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id)


    const quantity = () => cart.reduce((sum, i) => {return sum + i.quantity}, 0)

	const total = () => cart.reduce((sum, i) => { return sum + (i.quantity * i.price) }, 0)




	//////////// Agregar item al carrito
	const addToCart = (producto, cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id)
			].quantity += cantidad

			setCart(newCart)
			return
		}

		producto.quantity = cantidad
		setCart([...newCart, producto])
	}


    const intoCart = (id) => {
        return cart.some( prod => prod.id === id) 
    }
    
    const totalCant = () => {
        let total = 0
        cart.forEach(producto => total += producto.cant ) 
        return total;
    }



	//////////// Sacar item del carrito
	const deleteFromCart = (id) => {
		const newCart = [...cart]

    const cartFilter = newCart.filter ( prod => {
		return prod.id !== id;
	})
	setCart(cartFilter)

	}


	const clearCart = () => {
        const emptyCart = []
        setCart(emptyCart)
    }

	

	const deleteCart = () => setCart([])



	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
				clearCart,
				quantity,
				total
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider