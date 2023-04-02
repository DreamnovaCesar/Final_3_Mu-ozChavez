// Import necessary dependencies and components
import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

// Create a functional component for the CartWidget
const CartWidget = () => {
// Use the useContext hook to access state variables and functions from the SidebarContext and CartContext
let { isOpen, setIsOpen } = useContext(SidebarContext);
let { itemAmount } = useContext(CartContext);

  // Return the CartWidget component with the itemAmount and isOpen state variables
  return (
    <div className="flex items-center">
      <span className="ml-2 bg-gray-100 rounded-full px-7 py-2 text-sm font-medium text-gray-600" >{itemAmount}</span>
      <BsFillCartCheckFill onClick = {() => setIsOpen(!isOpen)} className="cursor-pointer ml-6 text-gray-300 hover:text-gray-100" size={28} />
    </div>
  );

};

// Export the CartWidget component for use in other parts of the application
export default CartWidget;