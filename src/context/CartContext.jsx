import React from "react";
import { createContext, useState, useEffect, useCallback } from "react";

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
    let addToCart = useCallback((product, id, increase = false) => {
        setCart(prevCart => {
            let cartItem = prevCart.find(item => item.id === id);
    
        if (cartItem && !increase) {
            // If the item exists and increase is false, create a new cart with the updated amount
            return prevCart.map(item => item.id === id ? {...item, amount: item.amount + 1} : item);
        } else if (cartItem && increase) {
            // If the item exists and increase is true, add the item to the cart with amount 1
            return [...prevCart, {...product, amount: 1}];
        } else {
            // If the item does not exist, add it to the cart with amount 1
            return [...prevCart, {...product, amount: 1}];
        }
        });
    }, []);
  
    let removeFromCart = useCallback((id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }, []);
    
    let clearCart = useCallback(() => {
        setCart([]);
    }, []);
    
    let decreaseAmount = useCallback((id) => {
        setCart(prevCart => {
        const cartItem = prevCart.find(item => item.id === id);
    
        if (cartItem.amount > 1) {
            // If the amount is greater than 1, create a new cart with the updated amount
            return prevCart.map(item => item.id === id ? {...item, amount: item.amount - 1} : item);
        } else {
            // If the amount is 1, remove the item from the cart
            return prevCart.filter(item => item.id !== id);
        }
        });
    }, []);
    
    let increaseAmount = useCallback((id) => {
        let cartItem = cart.find(item => item.id === id);
        addToCart(cartItem, id, true);
    }, [cart, addToCart]);

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