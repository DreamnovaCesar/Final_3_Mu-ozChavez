import React from "react";

import { createContext, useState, useEffect } from "react";

export let CartContext = createContext();

let CartProvider = ({ children }) => {

    let [cart, setCart] = useState([]);

    let addToCart = (product, id) => {
        let newItem = { ...product, amount: 1 };
        let cartItem = cart.find((item) => {
            return item.id === id;
        });

        if (cartItem){
            let newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }

    };

    let removeFromCart = (id) => {
        let newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart)
    };


    console.log(cart)

    return <CartContext.Provider value = {{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;