import React from "react";
import { useContext } from "react";
import { IoMdArrowForward } from 'react-icons/io'
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";
import CartItemProduct from "./CartItemProduct";

let Sidebar = () => {

    let { isOpen, SidebarClose } = useContext(SidebarContext);
    let { cart, clearCart, itemAmount, total } = useContext(CartContext)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl
        md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold tracking-wider">
                    Shopping Bag ({itemAmount})
                </div>
                <div 
                    onClick={SidebarClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 h-[820px] lg:h-[440px] overflow-y-auto overflow-x-hidden">
                {cart.length > 0 ? 
                (cart.map((item) => {
                    return <CartItemProduct key={item.id} id={item.id} image={item.image} title={item.title} amount={item.amount} price={item.price}></CartItemProduct>
                })) : (
                    <div className="text-center text-gray-400 py-4">
                        Your shopping bag is empty.
                    </div>
                )} 

                {cart.length > 0 && (
                    <div className="flex w-full justify-between items-center mt-4">
                        <div className="uppercase font-semibold tracking-wider text-gray-700">
                            <span className="mr-2">Total:</span> ${parseFloat(total).toFixed(2)}
                        </div>

                        <div 
                            onClick={clearCart} 
                            className="cursor-pointer py-2 px-4 bg-red-500 text-white font-semibold tracking-wider rounded-md hover:bg-red-600 transition-colors duration-200">
                            Clear Bag
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;