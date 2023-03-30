import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export let ProductContext = createContext();

let ProductProvider = ({ children }) => {

    //Products 

    let [products, setProducts] = useState([]);
    
    let productsCollection = collection(db, "products");

    // fetch

    useEffect(() => {
        let getproductsCollection = async() => {

            try {

                let data = await getDocs(productsCollection);
                let filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                setProducts(filteredData);
                
                console.log(filteredData);

            } catch (err) {
                console.error(err);
            }

        };

        getproductsCollection();
    }, []);

    /*useEffect(() => {
        let fetchProducts = async() => {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);*/

    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
}

export default ProductProvider;

