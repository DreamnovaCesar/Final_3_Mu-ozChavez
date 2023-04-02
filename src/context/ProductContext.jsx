// Importing necessary dependencies and components from React and Firebase
import React, { createContext, useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Creating a new context for product data to be shared across components
export let ProductContext = createContext();

// Creating a new component that will provide product data to other components
let ProductProvider = ({ children }) => {
    // Using useState hook to initialize an empty array for product data
let [products, setProducts] = useState([]);

// Creating a reference to the "products" collection in Firebase Firestore
let productsCollection = collection(db, "products");

// Using useEffect hook to fetch the product data from Firestore when the component mounts or when the "products" state changes
useEffect(() => {

    // Creating an asynchronous function to fetch the product data from Firestore
    let getProductsCollection = async () => {
        try {
            let data = await getDocs(productsCollection);
            // Extracting data and id from each document and mapping them to an array of objects
            let filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Updating the state of the "products" array with the filtered data
            setProducts(filteredData);
            console.log(filteredData);
        } catch (err) {
            console.error(err);
        } finally {
            // Empty code if i need it to
          }
    };

    // Adding a setInterval to check if products are found
    let intervalId = setInterval(() => {
        if (products.length === 0) {
            // Calling the getProductsCollection function if no products have been found yet
            getProductsCollection();
        } else {
            // Clearing the interval once products have been found
            clearInterval(intervalId);
        }
    }, 1000);
    // Clearing the interval when the component unmounts
    return () => clearInterval(intervalId);
}, [products, productsCollection]);

// Providing the "products" state to other components using the ProductContext.Provider component
return (
    <ProductContext.Provider value={{ 
        products 
    }}>{children}</ProductContext.Provider>
);
};

// Exporting the ProductProvider component as the default export
export default ProductProvider;