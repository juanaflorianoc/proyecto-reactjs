import React, { createContext, useContext, useEffect, useState } from "react"
import { getItem } from "../data/data"
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useParams } from "react-router-dom";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {


	/*const [products, setProducts] = useState([])

	useEffect(() => {
		getItem().then((resp) => setProducts(resp))
	})*/

    const {categoryId} = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const getItem = async () => {

        const MyItem = categoryId
            ? query(collection(db, "products"))
            : collection(db, "products")
        const querySnapshot = await getDocs(MyItem)
        setProducts(
          querySnapshot.docs.map((products) => {
            return { ...products.data(), id: products.id }
          })
        )
        }

      getItem()
    }, [categoryId] )



	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider