import React from "react";
import { useContext } from "react";


import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

import CartWidget from "./CartWidget";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";

import CartItemProduct from "./CartItemProduct";

let Sidebar = () => {

    //let { products } = useContext(ProductContext);

    //products.map((product) => (
        //console.log(product.title)
      //));
      
    let { isOpen, SidebarClose } = useContext(SidebarContext);
    let { cart, addToCart } = useContext(CartContext)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl
        md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">
                    Shopping bag (0)
                </div>
                <div 
                    onClick = {SidebarClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center">
                        <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div>
                {cart.map((item) => {
                    return <CartItemProduct id={item.id} image={item.image} title={item.title} amount={item.amount} price={item.price}></CartItemProduct>
                })} 
            </div>
        </div>
    );
};

export default Sidebar;