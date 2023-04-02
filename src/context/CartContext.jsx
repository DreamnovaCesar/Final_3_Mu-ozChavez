import React from "react";
import { createContext, useState, useEffect } from "react";

// Create the CartContext
export let CartContext = createContext();

let CartProvider = ({ children }) => {
    // Define the state variables for the cart items, total amount, and total price
    let [cart, setCart] = useState([]);
    let [itemAmount, setItemAmount] = useState(0);
    let [total, setTotal] = useState(0);
    
    // Use useEffect to update itemAmount whenever the cart changes
    useEffect(() => {
        let amount = cart.reduce((acc, curr) => acc + curr.amount, 0);
        setItemAmount(amount);
    }, [cart]);
    
    // Use useEffect to update total whenever the cart changes
    useEffect(() => {
        let amount = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
        setTotal(amount);
    }, [cart]);

    // Define functions to manipulate the cart
    let addToCart = (product, id) => {
        // Create a new item with the product and amount set to 1
        let newItem = { ...product, amount: 1 };
        
        // Check if the item already exists in the cart
        let cartItem = cart.find((item) => {
            return item.id === id;
        });

        if (cartItem){
            // If the item exists, create a new cart with the updated amount
            let newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            // If the item does not exist, add it to the cart
            setCart([...cart, newItem]);
        }
    };

    let removeFromCart = (id) => {
        let newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    let clearCart = () => {
        // Clear the cart by setting it to an empty array
        setCart([]);
    };

    let increaseAmount = (id) => {
        let newCart = [...cart].map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 };
            } else {
                return item;
            }
        });
        setCart(newCart);
    };
    let decreaseAmount = (id) => {
        let newCart = [...cart].map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount - 1 };
            } else {
                return item;
            }
        }).filter((item) => item.amount > 0);
        setCart(newCart);
    };

    console.log(cart)

    // Return the CartContext Provider with the defined state variables and functions
    return <CartContext.Provider value = {{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        increaseAmount, 
        decreaseAmount, 
        itemAmount,
        total
    }}>{children}</CartContext.Provider>;
};

export default CartProvider;